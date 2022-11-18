/* ФУНКЦИИ */
/*
let userOne = {
    role: "admin",
    firstName: "Никита"
}

function checkAccess(user, role) {
    return user.role === role; 
}

function showWelcomeMessage(user) {
    console.log("#################");
    console.log(`# Hello, ${user.firstName} #`);
    console.log("################");
}


function showError(user) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(`! Доступ запрещен, ${user.firstName} !`);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

const result = checkAccess(userOne, 'admin');

if (result) {
    showWelcomeMessage(userOne) }

else {
    showError(userOne) }

*/

/* ЗАДАЧА 1 */

let userName = "";

function checkUser(name) {
    if (name) {
        console.log(`Добро пожаловать, ${name}!`);;
    }
    else {
    console.log(`Добро пожаловать, гость!`); }
}

checkUser(userName);


/* ЗАДАЧА 2 

/* 

let firstValue = 25;
let degree = 3;

function exponentiation(firstValue, degree) {
    return firstValue**degree;
}

let result = exponentiation(firstValue, degree)
console.log(result);

*/



/* ЗАДАЧА 3 Написать функцию, которая будет принимать в качестве входного параметра
массив любых, целых чисел, и будет возвращать среднее арифметическое
значение данного массива*. */


/*
let arr = [10, 1, 4, 0, 13, 1212];
let result = 0; 

function func1(array)
{
    for (let i=0; i< array.length; i++) {
       result=result+array[i]
    }

    return result/array.length;
}

console.log(func1(arr));

*/


/* СТРЕЛОЧНЫЕ ФУНКЦИИ. Задача 1  Напишите стрелочную функцию которая будет выводить переданную строку в
консоль n раз.*/


/* 
let message = 'MISS ME?';

func1 = (count) => {
    for (let i = 0; i < count; i++) {
    console.log(message);
    }
}

func1(10);

*/


/* Задача 2.  Напишите стрелочную функцию, которая будет принимать в качестве параметра
букву и если она гласная, функция будет возвращать true, в противном случае
false .*/

/*

let array = ['А','а','Е','е','Ё','ё','И','и','О','о','У','у','Ю','ю','Я','я','Ы','ы','Э','э']

func1 = (letter) => {
    for (let i = 0; i < array.length; i++) {
        if (letter==array[i]) {
            return true;
        }
    }
    return false;
}
func1('Б')

*/

/* Задача 3.  Напишите стрелочную функцию, которая будет возвращать true если строка
является палиндромом и false в противном случае.*/

/*

func1 = (str, result='') => {
    for (let i = str.length-1; i >= 0; i--) {
        result = result + str[i]
    }

    if(str==result)
    {
        return true;
    }

    return false;
}

func1('102')

*/