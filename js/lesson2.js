// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
//styles[1] = 'Класика';
const indexOfElement = styles.indexOf('Блюз');
if (indexOfElement !== -1) {
    styles[indexOfElement] = 'Класика';
};

function logItems(array) {
    for (let i = 0; i < array.length; i++)
    {
    console.log(`${i+1}-${array[i]}`);
        }
}

logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(logins) {
    const login = prompt('Введіть login');
    //for (const element of logins) {
    //    if (login === element) {
     //       return "Доступ дозволено";
     //   }
 //   }
    //return "Користувач не знайден";
    
    return logins.includes(login) ? "Доступ дозволено" : "Користувач не знайден";
}

console.log(checkLogin(logins));