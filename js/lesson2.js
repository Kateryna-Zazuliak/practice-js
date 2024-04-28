// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// //styles[1] = 'Класика';
// const indexOfElement = styles.indexOf('Блюз');
// if (indexOfElement !== -1) {
//     styles[indexOfElement] = 'Класика';
// };

// function logItems(array) {
//     for (let i = 0; i < array.length; i++)
//     {
//     console.log(`${i+1}-${array[i]}`);
//         }
// }

// logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(logins) {
//     const login = prompt('Введіть login');
//     //for (const element of logins) {
//     //    if (login === element) {
//      //       return "Доступ дозволено";
//      //   }
//  //   }
//     //return "Користувач не знайден";

//     return logins.includes(login) ? "Доступ дозволено" : "Користувач не знайден";
// }

// console.log(checkLogin(logins));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumArr(array) {
//     const res = [];
//     for (let i = 0; i < array.length - 1; i++) {
//         res.push(array[i] + array[i + 1]);
//     }
//     return res;
// }

// console.log(sumArr(someArr));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//     let res = 0;
//     let count = 0;
//     for (const arg of arguments) {
//         if (typeof arg === 'number') {
//             res += arg;
//             count++;
//         }
//     }
//     if (count === 0) return 0;
//     return res / count;
// }

// console.log(caclculateAverage(true, 'hello'));

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function addName(name) {
//   if (names.includes(name)) return `${name} існує`;
//   names.push(name);
//   return names;
// }
// function remove(name) {
//   const indexElem = names.indexOf(name);
//   if (indexElem === -1) {
//     return "елемент не знайдено";
//   }
//   names.splice(indexElem, 1);
//   return names;
// }

// function update(oldName, newName) {
//   const indexElem = names.indexOf(oldName);
//   if (indexElem === -1) {
//     return "елемент не знайдено";
//   }
//   // names[indexElem] = newName;
//   names.splice(indexElem, 1, newName);
//   return names;
// }

// console.log(addName("Alla"));

// console.log(addName("Maxim"));
// console.log(remove("Petro"));
// console.log(update("Max", "Marina"));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }

//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(fruits, "Яблуко"));
