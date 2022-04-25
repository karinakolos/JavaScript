// TASK 1. Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
// let x = 20;
// let y = 58;
// let z = 42; //

let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;
console.log("Сумма: ", sum);

// TASK 2. Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году.Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds//

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;

let myAge = prompt("Ваш возраст?");
let myAgeInSeconds =
  secondsInMinute * minutesInHour * hoursInDay * daysInYear * myAge;

console.log("Ваш возраст в секундах: ", myAgeInSeconds);

// TASK 3. Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.//
let count = 42;
let userName = "42";

let newCount = String(count);
let newCount2 = count.toString();

let newUserName = Number(userName);
let newUserName2 = +userName;

// TASK 4. Имеется три переменные: Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль. //
let a = 1;
let b = 2;
let c = "белых медведей";

let result = `${a}${b}` + " " + c;

console.log("Результат:", result);

// TASK 5. Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка: //

let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";

let lengthWords = a.length + b.length + c.length + d.length + e.length;
console.log("Длинна всех слов из списка: ", lengthWords);

// TASK 6. Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида: `Variable: %variable name% have type: %type variable%` //
let variableFirst = 60;
let variableSecond = "Дом";
let variableThird = 9007199254740991n;

console.log("Variable: variableFirst have type:", typeof variableFirst);
console.log("Variable: variableSecond have type:", typeof variableSecond);
console.log("Variable: variableThird have type:", typeof variableThird);

// TASK 7. Запросить у пользователя имя и возраст и вывести их в консоль. //
let userName = prompt("Ваше имя?");
let userAge = prompt("Ваш возраст?");

console.log("Your name:", userName, ", Age", userAge);

// ADVANCED  //
// TASK 1. Поменяйте значение переменных местами не создавая дополнительной переменной:  let a = 4, let b = 3 //
let a = 4;
let b = 3;
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// TASK 2. В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов! let codeWord1 = "обернись"; let codeWord2 = "неужели"; let codeWord3 = "огурцы"; let codeWord4 = "липкие"; let codeWord5 = "?!"; Создайте переменную cipher и поместите туда необходимые символы //

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log("The cipher is hidden", cipher);

////////////////////////////////////////////////////////////////////
//  TASK 1. Создайте переменные и присвойте им значения:
// 'true';
// false;
// 17;
// undefined;
// null;
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
let a = "true";
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log("Тип переменной а =", typeof a);
console.log("Тип переменной b =", typeof b);
console.log("Тип переменной c =", typeof c);
console.log("Тип переменной d =", typeof d);
console.log("Тип переменной e =", typeof e);

// TASK 2. Даны две переменные:
// let height = 15;
// let width = 20;
// С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15;
let width = 20;

width > height
  ? console.log("Наибольшее значение из переменных: ", width)
  : console.log("Наибольшее значение из переменных: ", height);

// TASK 3. Написать перебор от 1 до 20, где выведутся все числа кратные трём. Для вычисления кратности обратите внимание на оператор %//

for (let i = 1; i <= 20; i++) {
  i % 3 === 0 ? console.log(i) : null;
}

// TASK 4. Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.
// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// Ответ поместите в переменную shouldGoToWork

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = "";

if (
  key == true &&
  documents == true &&
  pen == true &&
  (apple == true || orange == true)
) {
  shouldGoToWork = "Можешь идти на работу!";
} else {
  shouldGoToWork = "Не можешь идти на работу!";
}
console.log(shouldGoToWork);

// TASK 5. Запросить у пользователя число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение

let number = prompt("Введите число");

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizBuz");
} else if (number % 5 === 0) {
  console.log("Fiz");
} else if (number % 3 === 0) {
  console.log("Buz");
} else {
  console.log(number);
}

// TASK 6. Написать программу, которая выполняет следующие операции:
// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

let userAge = prompt("Ваш возраст");
if (userAge >= 18) {
  console.log("Попей пивка");
} else if (userAge >= 16) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
  console.log("Пей колу");
}

// TASK 7. Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch

let direction = prompt("Ведите нужное вам направление");
switch (direction) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Попробуйте еще раз");
    break;
}

// // ADVANCED //

// TASK 1. Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert
// Привет, Полина Набережная! //
let userFirstName = "пОлИнА";
let correctUserFirstName = userFirstName[0].toUpperCase();
for (let i = 1; i < userFirstName.length; i++) {
  correctUserFirstName += userFirstName[i].toLocaleLowerCase();
}

let userSurname = "нАбЕрЕжНаЯ";
let correctUserSurname = userSurname[0].toUpperCase();

for (let i = 1; i < userSurname.length; i++) {
  correctUserSurname += userSurname[i].toLocaleLowerCase();
}
alert("Привет, " + correctUserFirstName + " " + correctUserSurname + "!");

// TASK 2. Написать программу, которая выполняет следующие операции:
// Запрашивает у пользователя число.
// Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// По окончании вывести пользователю alert, содержащий формулу и результат например:((((6 - 10) + 5) * 20) / 2 = 110)

let number = prompt("Число");
let minus = prompt("Сколько отнять?");
let plus = prompt("Сколько прибавить?");
let multiply = prompt("На сколько умножить?");
let divide = prompt("На сколько разделить?");

let result =
  ((Number(number) - Number(minus) + Number(plus)) * Number(multiply)) /
  Number(divide);

alert(
  "(((" +
    number +
    "-" +
    minus +
    ") + " +
    plus +
    ") * " +
    multiply +
    ") / " +
    divide +
    "=" +
    result
);

// TASK 3. Написать программу, которая будет выводить в консоль лесенку.
// #
// ##
// ###
// ####
// #####
// ######
let n = 6;
let steps = "";
for (let i = 0; i < n; i++) {
  steps += "#";
  console.log(steps);
}
// Вариант 2 (с другой стороны)
let n = 6;
let star = "";
let space = "";
for (let i = 0; i < n; i++) {
  star = "#".repeat(i * 2 + 1);
  space = " ".repeat(n - i - 1);
  console.log(space + star);
}

// Вариант 3 (по центру... елочка)
let n = 6;
let star = "";
let space = "";
for (let i = 0; i < n; i++) {
  star += "#";
  space = " ".repeat(n - i - 1);
  console.log(space + star);
}

///////////////////////////////////////////////////////////////////////
// TASK 1. Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050) //
function getSum(number) {
  let summ = 0;
  for (let i = 0; i <= number; i++) {
    summ += i;
  }
  return summ;
}
console.log(`Сумма чисел = ${getSum(100)}`);

// TASK 2. Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:процентная ставка в год — 17%,количество лет — 5.Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.//
function calcOverpayment(loanAmount) {
  return loanAmount * 0.17 * 5;
}
console.log(`Переплата по кредиту составит: ${calcOverpayment(100)} рублей `);

// TASK 3. Написать функцию trimString которая в качестве аргумента принимает три параметра:строку, значение от, значение по. После вызова функция должна вернуть переданную строку обрезанную по значениям от и по //
function trimString(string, x, y) {
  let newString = "";
  for (let i = x; i < y; i++) {
    newString += string[i];
  }
  return newString;
}
console.log(trimString("Вкусный кофе!", 8, 12));

// TASK 4. Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.Для 2021 это будет 5. //
function getSumNumbers(number) {
  let string = String(number);
  let summ = 0;
  for (let i = 0; i < string.length; i++) {
    summ += +string[i];
  }
  return summ;
}
console.log(`Сумма цифр числа = ${getSumNumbers(2021)}`);

// TASK 5. Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b. getSum(1, 0) == 1   // 1 + 0 = 1 //
function getSum(a, b) {
  let summ = 0;
  for (let i = a; i <= b; i++) {
    summ += i;
  }
  if (a == b) {
    return a;
  } else return summ;
}
console.log(`Сумма всех чисем между a и b = ${getSum(1, 3)}`);

// TASK 6. Напишите функцию fooboo которая принимает в качестве аргумента три параметра:булевое значение,функцию foo которая выводит в консоль свое имя,функцию boo которая выводит в консоль свое имя. Если переданное булевое значение true запускаем функцию foo иначе boo //
function foo() {
  return "foo";
}
function boo() {
  return "boo";
}
function fooboo(bool, fn1, fn2) {
  if (bool) {
    return fn1;
  } else {
    return fn2;
  }
}
console.log(fooboo(false, foo(), boo()));

//// ADVANCED ////
// TASK 1. Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае. //
function checkTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTriangle(7, 1, 50));

// TASK 2. Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
// Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
// Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом. //
function calcFractures(n, m) {
  return n - 1 + (m - 1);
}
console.log(`Шоколад можно поделить ${calcFractures(10, 5)} раз(a)`);

// TASK 3. Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов. //
let account = prompt("Баланс банковского счета");
const phonePrice = 5199;
const accessoryPrice = 23;
const taxRate = 0.2;
let count = 0;

let purchases = phonePrice + accessoryPrice;

function calcTax(sum, tax) {
  return sum + sum * tax;
}
function roundTax(sum) {
  return Math.floor(sum * 100) / 100;
}
function convert(val) {
  account = Math.floor(account * 100) / 100;
  let accCurrency = account + "$";
  return accCurrency;
}

let totalCost = roundTax(calcTax(purchases, taxRate));

if (account > totalCost) {
  while (account > totalCost) {
    count++;
    account = account - totalCost;
  }
  console.log(
    `Ваш остаток на балансе: ${convert(account)}. Кол-во покупок: ${count}`
  );
} else console.log("Недостаточно средств на балансе ");

////////////////////////////////////////////////////////////////////////
// TASK 1. Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. //
const user = {
  name: "Alina",
  age: 18,
};
console.log(user);
delete user.name;
delete user.age;
console.log(user);

// TASK 2. Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true //
const cat = {
  name: "pushok",
  age: 3,
  color: "white and black",
};

console.log("color" in cat);

// TASK 3. Дан обьект:
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (const key in student) {
  console.log(key);
}
for (const key in student) {
  console.log(student[key]);
}
//  TASK 4. Дан обьект: ... Вывести в консоль слово красный и синий //
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

for (const key in colors) {
  console.log(colors["ru pum pu ru rum"].red);
  console.log(colors["ru pum pu ru rum"].blue);
}

// TASK 5. Дан обьект: ... Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную //
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  alex: 664,
  alexandra: 199,
};
function averageSalary(obj) {
  let i = 0;
  let summ = 0;
  for (const key in salaries) {
    i++;
    summ += salaries[key];
  }
  return `Средняя зарплата равна ${summ / i}`;
}
console.log(averageSalary(salaries));

// TASK 6. Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать. //

const registrationUser = {
  login: prompt("Введите логин"),
  password: prompt("Введите пароль"),
  repeatedLogin: prompt("Введите еще раз логин"),
  repeatedPassword: prompt("Введите еще раз пароль"),
};

if (
  registrationUser.login === registrationUser.repeatedLogin &&
  registrationUser.password === registrationUser.repeatedPassword
) {
  alert("Добро пожалоВать");
} else alert("Не верно ввели логин или пароль");

//// ADVANCED ////
// TASK 1. Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. //
const number = {
  0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
};
function q(x, y) {
  let a = "";
  let b = "";
  for (const key in number) {
    if (x == key) {
      a = number[key];
    }
    if (y == key) {
      b = number[key];
    }
  }
  return `${a}:${b}`;
}
console.log(q(1, 2));

// TASK 2. Даны два одинаковых обьекта. Сравните их так чтобы они были равны //
let student1 = {
  name: "Polina",
  age: 27,
};
let student2 = {
  name: "Polina",
  age: 27,
};

let result = 0;
let i = 0;
for (const key1 in student1) {
  for (const key2 in student2) {
    if (key1 === key2 && student1[key1] === student2[key2]) {
      result++;
    }
  }
  i++;
}

if (i == result) {
  console.log("true");
} else {
  console.log("false");
}

// TASK 3. У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ.Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше. //
const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};

"bird" in animals
  ? console.log(animals.bird.name)
  : console.log("Данного животного нет в базе данных");

///////////////////////////////////////////////////////////////////
// TASK 1. Дан массив: ... Выведите в консоль его длину. //
const colors = ["red", "green", "blue"];
function arrayLength(arr) {
  return arr.length;
}
console.log(arrayLength(colors));

// TASK 2. Дан массив: ... Выведите в консоль его последний элемент вне зависимости от его длинны. //
const animals = ["monkey", "dog", "cat"];
function lastElement(arr) {
  return arr[arr.length - 1];
}
console.log(lastElement(animals));

// TASK 3. Дан массив:... Удалите все элементы в массиве и выведите в консоль полученный результат. //
const numbers = [5, 43, 63, 23, 90];
function deleteAll(arr) {
  arr.length = 0;
  return arr;
}
console.log(deleteAll(numbers));

function deletAllEl(arr) {
  arr.splice(0, 5);
  return arr;
}
console.log(deletAllEl(numbers));

// TASK 4. Дан массив: ...
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.//
const students = ["Polina", "Dasha", "Masha"];

function deleteLastFirst(arr) {
  arr.pop();
  arr.push("Borya");
  arr.shift();
  arr.unshift("Andrey");
  return arr;
}
console.log(deleteLastFirst(students));

// TASK 5. Дан массив:... Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.//
const cats = ["Gachito", "Tom", "Batman"];

function arrayCons(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return;
}
arrayCons(cats);

function arrayConsTwo(arr) {
  for (let el of arr) {
    console.log(el);
  }
  return;
}
arrayConsTwo(cats);

// TASK 6. Соедините два массива чисел в один.В полученном массиве попробуйте найти индекс числа 8 //
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
function concatFunctions(arr, array) {
  let newFunction = arr.concat(array);
  let index = newFunction.indexOf(8);
  return `Индекс числа 8 = ${index} , новая функция ${newFunction}`;
}
console.log(concatFunctions(evenNumbers, oddNumbers));

// TASK 7. Дан массив: ... Наш бинарный массив неполный, в нем явно не хватает единиц.Превратите данный массив в строку. [0, 0, 0, 0] -> '0101010' //
const binary = [0, 0, 0, 0];
function toStr(arr) {
  return arr.join(1);
}
console.log(toStr(binary));

// // ADVANCED  ////
// TASK 1. Реализуйте функцию которая будет проверять, является ли слово палиндромом. //
let word = "1234321";

function palindromCheck(str) {
  let newStr = str.split("").reverse().join("");

  return str === newStr ? "Палиндром" : "Не палиндром";
}
console.log(palindromCheck(word));

// TASK 2. Выведите в консоль среднее значение чисел в многомерном массиве. //
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
function averageValue(arr) {
  let newFunction = [].concat(arr[0], arr[1], arr[2], arr[3]);
  let summ = 0;
  let n = 0;
  for (let i = 0; i < newFunction.length; i++) {
    n++;
    summ += newFunction[i];
  }
  return `Среднее значение чисел в многомерном массиве = ${summ / n}`;
}
console.log(averageValue(matrix));

// TASK 3. Дан массив: ...  Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. //
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
function plusAndMinus(arr) {
  let plus = [];
  let minus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      plus += arr[i];
    } else {
      minus += arr[i] + ",";
    }
  }
  let arrayPlus = plus.split("");
  let arrayMinus = minus.split();
  return `Массив из положительных чисел: ${arrayPlus}, массив из отрицательных чисел: ${arrayMinus}`;
}
console.log(plusAndMinus(mixedNumbers));

// TASK 4. Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль. //
// RANDOM
function random(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
function randomArray(size, min, max) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(random(min, max));
  }
  return array;
}
let arrayTask = randomArray(7, 1, 10);

//

function calcInCube(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray += arr[i] ** 3 + " ";
  }
  return `Новый массив: ${newArray}`;
}
console.log(arrayTask);
console.log(calcInCube(arrayTask));

//////////////////////////////////////////////////////////////////////
// TASK 1. Выведи все элементы массива в консоль с помощью метода forEach. Реализуйте решение двумя способами, используя function declaration & arrow function //
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function elInConsole(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}
elInConsole(fibonacci);

let elInConsoleArrow = () => fibonacci.forEach((el) => console.log(el));

elInConsoleArrow();

// TASK 2. Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:['member 1: Darya', 'member 2: Masha', ... etc]. Реализуйте решение двумя способами, используя function declaration & arrow function. //

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

function numberOfUser(arr) {
  let newArray = [];
  newArray = arr.map((el, i) => "member " + (i + 1) + " : " + el);
  return newArray;
}
console.log(numberOfUser(users));

let numberOfUserArrow = (arr) =>
  arr.map((el, i) => "member " + (i + 1) + " : " + el);

console.log(numberOfUserArrow(users));

// TASK 3. С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.//
const numbers = [7, -4, 32, -90, 54, 32, -21];

function positiveValues(arr) {
  let newArr = [];
  newArr = arr.filter((el) => el > 0);
  return newArr;
}
console.log(positiveValues(numbers));

let positiveValuesArrow = (arr) => arr.filter((el) => el > 0);
console.log(positiveValuesArrow(numbers));

// TASK 4. Используя метод reduce получите сумму всех чисел массива.//
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function summOfFibonacci(arr) {
  let summ = arr.reduce((acc, el) => acc + el);
  return summ;
}
console.log(summOfFibonacci(fibonacci));

let summOfFibonacciArrow = (arr) => arr.reduce((acc, el) => acc + el);
console.log(summOfFibonacciArrow(fibonacci));

// TASK 5. Используя метод find найдите в массиве первое четное число.//
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
function getFirstPositiveNumber(arr) {
  let positivNumb = arr.find((el) => el >= 0);
  return positivNumb;
}
console.log(getFirstPositiveNumber(numbers));

let firstPositiveNumber = (arr) => arr.find((el) => el >= 0);
console.log(firstPositiveNumber(numbers));

//// ADVANCED ////

// TASK 1. Написать функцию конструктор Student

// В каждом объекте студента должны быть поля salary , rate , name

// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

// Создать массив students и поместить в него студентов.

// Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// rate имеет 4 категории A B C D

// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит//
function Student(name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;
  this.credit = function creditSt() {
    let creditALL = 0;
    if (rate == "A") {
      this.credit = salary * 12;
    } else if (rate == "B") {
      this.credit = salary * 9;
    } else if (rate == "C") {
      this.credit = salary * 6;
    } else if (rate == "D") {
      this.credit = salary * 0;
    }
    return this.credit;
  };
}

let user1 = new Student("Alina", 2000, "A");
let user2 = new Student("Angelina", 1700, "A");
let user3 = new Student("Sofia", 1200, "B");
let user4 = new Student("Rita", 1000, "C");
let user5 = new Student("Dasha", 700, "D");

user1.credit();
user2.credit();
user3.credit();
user4.credit();
user5.credit();

let students = [user1, user2, user3, user4, user5];
console.log(students);

function totalCredit(arr) {
  let summ = 0;
  for (let el of arr) {
    summ += el.credit;
  }
  return `Общая сумма кредитов которую можно выдать группе: ${summ}`;
}
console.log(totalCredit(students));

// TASK 2. Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этой задачи y не считается гласной.//

let str = "This website is for losers LOL!";

function removeVowels(string) {
  let arr = string.split("");
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  let newStr = arr.filter((i) => !vowels.includes(i));
  return newStr.join("");
}
console.log(removeVowels(str));

// TASK 3. Нет истории, нет теории. В приведенных ниже примерах показано, как написать функцию:  accum("abcd") -> "A-Bb-Ccc-Dddd" //
function accum(str) {
  let newStr = "";
  let symbol = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      symbol = str[i].toUpperCase();
      newStr += symbol;
    } else {
      symbol = str[i].toUpperCase() + str[i].repeat(i).toLowerCase();
      newStr += "-" + symbol;
    }
  }
  return newStr;
}

console.log(accum("AbCdE"));

// TASK 4. В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число. highAndLow('1 2 3 4 5'); // return "5 1"// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.
function highAndLow(str) {
  let arr = str.split("");
  let newArr = arr.filter(Number);
  console.log(newArr);
  let max = Math.max.apply(null, newArr);
  let min = Math.min.apply(null, newArr);

  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));

// TASK 5. Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем. isIsogram('Dermatoglyphics') == true; isIsogram('aba') == false; //
function isIsogram(str) {
  let newStr = str.toLowerCase();
  let arr = newStr.split("");
  let uniqArr = arr.filter((val, i, ar) => ar.indexOf(val) === i);
  if (arr.length == uniqArr.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isIsogram("Dermatoglyphics"));

// TASK 6. Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную total1

// Затем замените все числа 7 на число 1 и назовите это число total2

// После верните разницу между суммой цифр total1 и total2

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667//
function strToAscii(str) {
  let total = "";
  for (let i = 0; i < str.length; i++) {
    total += str.charCodeAt(i);
  }
  let totalToArrow = total.split("");
  let totalToArr = totalToArrow.map((i) => Number(i));
  let sumOFtotal = totalToArr.reduce((acc, el) => acc + el);
  let totalNew = total.split("").map(function (el) {
    return el == 7 ? 1 : el;
  });
  let total2 = totalNew.map((i) => Number(i));
  let sumOFtotal2 = total2.reduce((acc, el) => acc + el);
  return sumOFtotal - sumOFtotal2;
}
console.log(strToAscii("ABC"));

// TASK 7. Дубликаты
// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен (, если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))((" //
function getListIdx(str, substr) {
  let lastIndex = -1;
  let count = 0;
  while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
    count++;
  }
  return count;
}

function convertString(str) {
  str = str.toLocaleLowerCase();
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let count = getListIdx(str, arr[i]);
    if (count == 1) {
      arr[i] = "(";
    } else {
      arr[i] = ")";
    }
  }
  return arr.join("");
}

console.log(convertString("Aartyuiop"));
