// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement('ol');
// const addButton = document.createElement('button');
// const removeButton = document.createElement('button');
// const input = document.createElement('input');

// document.body.append(input, addButton, removeButton, list);

// addButton.textContent = 'add elem';
// removeButton.textContent = 'remove elem';

// addButton.addEventListener('click', addItemHandler);
// removeButton.addEventListener('click', removeItemHandler);

// function addItemHandler() {
//     const value = input.value.trim();

//     if (value === '') return;

//     const item = document.createElement('li')

//     item.textContent = value;
//     list.append(item);
//     input.value = '';
// };

// function removeItemHandler() {
//     if (!list.lastChild) return;
//     list.lastChild.remove();
// };

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

const figure = document.createElement('div');
changeFigureHandler() 
document.body.append(figure);
figure.addEventListener('click', changeFigureHandler);

function changeFigureHandler() {
    const randomFigure = forms[randomither(forms.length)];
    figure.style.cssText = randomFigure;
    figure.style.backgroundColor = getRandomHexColor();
    figure.style.position = 'absolute';
    figure.style.left = `${randomither(100)}%`;
    figure.style.top = `${randomither(100)}%`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function randomither(max) {
  return Math.floor(Math.random() * max);
}

