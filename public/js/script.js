// Change bank card color on click
const bankCard = document.querySelector('.bank-card__body');

const generateHslColor = () => {
    let hue = Math.floor(Math.random() * 360) + 1; // 0-360 - All available values
    let saturation = 100 - (Math.floor(Math.random() * 30) + 1); // 70%-100%
    let lightness = 40 - (Math.floor(Math.random() * 20) + 1); // 20%-40%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const changeBankCardBackgroundColor = () => {
    bankCard.style.backgroundColor = generateHslColor();
};

setInterval(changeBankCardBackgroundColor, 1000);
