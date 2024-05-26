const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// *зробити функцію універсальною, щоб вона повертала
// масив будь-якої заданої властивості

// function getUserNames(users) {
//     return users.map(user => user.name);

// }
// console.log(getUserNames(users));

// function newGetUserNames(users, value) {
//     return users.map(user => user[value]);

// }
// console.log(newGetUserNames(users, "email"));
// console.log(newGetUserNames(users,"age"));

// Отримати масив імен користувачів по полю (поле gender)
// console.log(getUsersWithGender(users, 'male')); //
// ['Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// function getUserGender(users, gender) {
//   // return users
//   //   .filter((user) => user.gender === gender)
//   //   .map((user) => user.name);
//   return users.reduce(
//     (names, user) => (user.gender === gender ? [...names, user.name] : names),
//     []
//   );
// }

// console.log(getUserGender(users, "male"));

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
// 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(users) {
//   return users.flatMap(user => user.skills).filter((user, index, array) => array.indexOf(user) === index).toSorted((a, b) => a.localeCompare(b));
// }
// console.log(getSortedUniqueSkills(users));

//Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const stats = {}

// tweets.flatMap(tweet => tweet.tags).forEach(tag => {
//   if (!stats[tag]) {
//     stats[tag] = 1;
//   } else {
//     stats[tag] += 1;
//   }
// })

// console.log(stats);

//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return { clientLogin: this.#login, clientEmail: this.#email };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("hgjf", "gfdsa@gmail.com");

// console.log(client.getClientData);
// client.changeEmail = "hhgj@MediaMetadata.ua";

// console.log(client.getClientData.clientEmail);



//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

// class Notes {
//   static Priority = {
//     HIGHT: "hight",
//     MIDDLE: "middle",
//     LOW: "low"
//    }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note)
//   }
//   removeNote(noteText) {
//     this.items = this.items.filter(note => note.text !== noteText)
//   }
//   updatePriority(noteText, newPriority) {
//     const note = this.items.find(note => note.text === noteText)
//     if (note) note.priority = newPriority;
//   }
//   getAllNotes() {
//     this.items.forEach(item => console.log(`Todo:${item.text}, Priority:${item.priority}`))
//   }
// }

// const text = new Notes()
// text.addNote({
//   text: "test",
//   priority: Notes.Priority.MIDDLE,
// })
// text.addNote({
//   text: "add",
//   priority: Notes.Priority.LOW,
// })
// text.addNote({
//   text: "all",
//   priority: Notes.Priority.HIGHT,
// })

// text.removeNote("test");

// text.updatePriority("all", Notes.Priority.LOW);

// text.getAllNotes();



// 4. Створити клас Worker, у якого є властивості name, age, salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"


// class Worker {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSalary() {
//     return `Worker ${this.name} has salary ${this.salary} dollars`;
//   }
// }

// class WorkerPosition extends Worker {
//   constructor(name, age, salary, position) {
//     super(name, age, salary);
//     this.position = position;
//   }

//   getPosition() {
//     return `${this.name} works as ${this.position}`;
//   }
// }

// const copy = new WorkerPosition('John', 30, 1000, 'accountant');
// console.log(copy);
// console.log(copy.getSalary());
// console.log(copy.getPosition());


// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//   name: 'John',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/// Даний словник із міст та дат виступів рок-групи
/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Київ", "Умань", "Одеса"]
// const concerts = {
//   Київ: new Date("2024-08-01"),
//   Умань: new Date("2024-07-02"),
//   Вінниця: new Date("2023-04-21"),
//   Одеса: new Date("2024-07-15"),
//   Хмельницький: new Date("2023-04-18"),
//   Харків: new Date("2023-07-10"),
// };

// function getCityName(obj) {
//  return Object.keys(obj).filter(city => obj[city] > new Date()).toSorted((a, b) => obj[a] - obj[b]);
// }

// console.log(getCityName(concerts))

// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.
// const data = [10, 20, 30, 40, 50, 60];
// const alphData = ["a", "b", "c", "d", "e"];

// function reverseArr(arr) {
//   return arr.reduce((acc, el) => [el, ...acc],[])
// }

// console.log(reverseArr(data));
// console.log(reverseArr(alphData));

