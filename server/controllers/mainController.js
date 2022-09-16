'use strict';

const User = require('../models/User');
const bcrypt = require('bcrypt');

const headings = [
    'Control your environment',
    'Stable high performance',
    'Make your transactions secure',
    'Perform your task anywhere, anytime',
];
const paragraphs = [
    'Our plugin system give you ability to see and perform tasks how you want in many different ways.',
    'Only 0.3% of the time in a year BayBank has low performance or is down completely. Other 99.7% of the time there is only pure speed!',
    'All transactions have history of who, when, why and how they were made all the time. There is simply no possibility of your funds getting hijacked.',
    'Want to get money transferred to your account on Sunday night in Seychelles? Let us make that happen in a matter of seconds.',
];
const img = ['team_work.svg', 'fast_working.svg', 'money_transfer.svg', 'relaxing.svg'];

const cards = [];

for (let i = 0; i < headings.length; i++) {
    cards.push({heading: headings[i], paragraph: paragraphs[i], img: img[i]});
}

// GET Home
exports.getIndex = async (req, res, next) => {
    try {
        res.render('index', {
            title: 'Home' + ' | BayBank - the best solution for both individuals and companies',
            path: '/',
            active: 'Home',
            cards: cards,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

exports.getLogin = async (req, res, next) => {
    try {
        res.render('login', {
            title: 'Login' + ' | BayBank - the best solution for both individuals and companies',
            path: '/login',
            active: 'Login',
        });
    } catch (error) {
        res.render('404', {
            title: '404' + ' | BayBank - the best solution for both individuals and companies',
            path: '/404',
            active: '',
        });
    }
};

exports.getRegister = async (req, res, next) => {
    try {
        res.render('register', {
            title: 'Register',
            path: '/register',
            active: 'Register',
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

exports.postRegister = async (req, res, next) => {
    try {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const repeatedPassword = req.body.repeatedPassword;

        const validated = function () {
            const isValidatedEmail = validateEmail();
            const isValidatedUsername = validateUsername();
            const isValidatedPassword = validatePassword();
            const isValidatedRepeatedPassword = password === repeatedPassword;

            if (isValidatedEmail && isValidatedUsername && isValidatedPassword && isValidatedRepeatedPassword) {
                return true;
            } else {
                return false;
            }
        };

        if (validated) {
            const currentDate = new Date().toUTCString();
            const hashedPassword = await bcrypt.hash(password, 10);

            const isUser = await User.findOne({email: email, username: username});

            if (!isUser) {
                const user = await User.create({
                    email: email,
                    username: username,
                    password: hashedPassword,
                    role: 'basic',
                    createdAt: currentDate,
                    updatedAt: currentDate,
                });

                res.redirect('/login');
            } else {
                res.redirect('/register');
            }
        } else {
            res.redirect('/register');
        }
    } catch (error) {
        console.log(error);

        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// Helpers
function validateEmail(email) {
    const regex = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');

    return regex.test(email);
}

function validateUsername(username) {
    const regex = new RegExp('[A-Za-z0-9]{3,20}');

    return regex.test(username);
}

function validatePassword(password) {
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,30}$');

    return regex.test(password);
}
