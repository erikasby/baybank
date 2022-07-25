// Change bank card color on click
const bankCard = document.querySelector('.bank-card__body');

const generateHslColor = () => {
    return `hsl(${Math.floor(Math.random() * 360) + 1}, ${50 - (Math.floor(Math.random() * 50) + 1)}%, ${
        50 - (Math.floor(Math.random() * 50) + 1)
    }%)`;
};

const changeBankCardBackgroundColor = () => {
    bankCard.style.backgroundColor = generateHslColor();
};

setInterval(changeBankCardBackgroundColor, 1000);
