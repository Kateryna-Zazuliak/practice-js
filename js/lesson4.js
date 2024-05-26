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
// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// const figure = document.createElement('div');
// changeFigureHandler()
// document.body.append(figure);
// figure.addEventListener('click', changeFigureHandler);

// function changeFigureHandler() {
//     const randomFigure = forms[randomither(forms.length)];
//     figure.style.cssText = randomFigure;
//     figure.style.backgroundColor = getRandomHexColor();
//     figure.style.position = 'absolute';
//     figure.style.left = `${randomither(100)}%`;
//     figure.style.top = `${randomither(100)}%`;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let size = 50;

// const markup = `<div class="box" style="height: ${size}px; width: ${size}px; background-color: tomato;" >
//     </div>

//     <button class="incr-btn" type="button">
// Збільшити
//     </button>
//     <button class="decr-btn" type="button">
// Зменшити
//     </button>`

// document.body.insertAdjacentHTML('afterbegin', markup);

// const box = document.querySelector(".box");
// const incrBtn = document.querySelector(".incr-btn");
// const decrBtn = document.querySelector(".decr-btn");

// incrBtn.addEventListener("click", incrBoxHandler);
// decrBtn.addEventListener("click", decrBoxHandler);

// function incrBoxHandler() {
//   size += 10;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }
// function decrBoxHandler() {

//   if (size === 10) return;
//    size -= 10;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;

//  }

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const items = document.querySelectorAll(".listItem");
// const button = document.querySelector("#double");

// button.addEventListener("click", doubleItems);

// function doubleItems() {
//   items.forEach(item => { item.textContent *= 2})
// }

/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const itemsElem = document.querySelectorAll(".gridItem");

// itemsElem.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     item.classList.add("hide");
//   });
//   item.addEventListener("mouseleave", () => {
//     item.classList.remove("hide");
//   });
// });

// Завдання 14
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const eventThumbElem = document.querySelector(".eventThumb");

// document.addEventListener("keydown", ({ key, code }) => {
//   //   console.log(event.key, event.code);
//   const markup = `<ul class='eventList'>
//       <li class="eventCode">${code}</li>
//       <li class="eventKey">${key}</li>
//     </ul>`;

//   eventThumbElem.insertAdjacentHTML("beforeend", markup);

//   if (code === "Escape" || code === "Backspace") {
//     eventThumbElem.innerHTML = "";
//   }
// });

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const productTable = document.querySelector('#productTable');
// const productMessage = document.querySelector('#productDetails');

// productTable.addEventListener('click', showMessage);
// function showMessage(event) {
//     if (event.target.nodeName !== 'TD') return;
//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;
//     productMessage.textContent = `Ви вибрали ${product} за ${price}`
// }

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
const buttons = document.querySelector('.statList');
const resultButton = document.querySelector('#resultButton');
const resultSection = document.querySelector('#resultSection');

let sum = 0;
let stats = {};
buttons.addEventListener('click', countClicks);
function countClicks(event) {
    if (event.target.nodeName !== 'BUTTON') return;
    const key = event.target.textContent;
    if (stats[key]) stats[key] += 1
    else stats[key] = 1;
    const number = Number(event.target.dataset.number);
    sum += number;
}
resultButton.addEventListener('click', showResult);
function showResult() {
    let markup = `Загальна кількість ${sum}`;
    for (const [key, value] of Object.entries(stats)) {
        markup += `${key} натиснута ${value} разів`
    }
    resultSection.textContent = markup;
    sum = 0;
    stats = {};
}