// Change bank card color on click
const bankCardColors = document.querySelector('.bank-card__colors');

bankCardColors.addEventListener('click', (event) => {
    const clickedColor = event.target;
    const clickedColorBackgroundColor = getComputedStyle(clickedColor).backgroundColor;
    const bankCard = clickedColor.parentNode.parentNode;
    bankCard.style.backgroundColor = clickedColorBackgroundColor;
});
