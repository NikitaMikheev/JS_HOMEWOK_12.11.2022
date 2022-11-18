/* Задача 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. func1 */

function func1(value) {
    return value*value; 
}

/* Задача 2. Сделайте функцию, которая возвращает сумму двух чисел. func2 */

function func2(firstValue, secondValue) {
    return firstValue+secondValue; 
}

/* Задача 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. func3 */

function func3(firstValue, secondValue, thirdValue) {
    return (firstValue-secondValue)/thirdValue; 
}

/* Задача 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */

function func1(day) {
    switch (day) {
        case 1:
            day='Понедельник'
            break;
        case 2:
            day='Вторник'
            break;
        case 3:
            day='Среда'
            break;
        case 4:
            day='Четверг'
            break;
        case 5:
            day='Пятница'
            break;
        case 6:
            day='Суббота'
            break;
        case 7:
            day='Воскресенье'
            break;
        default:
            day='Такого дня недели не существует!'
            break;
    }
    return day;
}

/* Задача 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. */

function func1(firstValue, secondValue) {
    return (firstValue==secondValue); 
}

/* Задача 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false. */

function func1(firstValue, secondValue) {
    return (firstValue+secondValue>10); 
}

/* Задача 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. */

function func1(isNegative) {
    return (isNegative<0); 
}

/* Задача 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

function isNumberInRange(value) {
    return (value>0 && value<10); 
}

/* Задача 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */

let arrayStart = [5,2,0,-5,1];
let arrayEnd = [];

function isNumberInRange(value) {
    return (value>0 && value<10); 
}

function func1(arrayStart) {
    for (let i = 0; i < arrayStart.length; i++) {
        if(isNumberInRange(arrayStart[i])) {
            arrayEnd.push(arrayStart[i])  
        }  
    }
    return arrayEnd; 
}

/* Задача 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.*/
function getDigitsSum(value) {
    let result = 0;
    const array = Array.from(String(value), Number)
    for (let i = 0; i < array.length; i++) {
       result = result+array[i]
    }
    return result;
}

/* Задача 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/

function getDigitsSum(value) {
    let result = 0;
    const array = Array.from(String(value), Number)
    for (let i = 0; i < array.length; i++) {
       result = result+array[i]
    }
    return result;
}

function func1() {
    for (let startYear = 1; startYear <= 2020; startYear++) {
       if(getDigitsSum(startYear)==13)
       console.log(`Сумма цифр ${startYear} равняется 13`);
    }
}


/* Задача 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

function isEven(value) {
    return (value%2==0); 
}

/* Задача 13.  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/

let array = [4,2,6,3,5,11,2];
let arrayEnd = [];

function isEven(value) {
    return (value%2==0); 
}

function func1(arrayEven) {
    for (let i = 0; i < arrayEven.length; i++) {
        if(isEven(arrayEven[i])) {
            arrayEnd.push(arrayEven[i])  
        }  
    }
    return arrayEnd; 
}

/* Задача 14.  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).*/


function getDivisors(value) {
    let result = [];
    for (let i = 1; i <= value; i++) {
        if (value%i==0) {
            result.push(i)
        }
    }
    return result;
}

/* Задача 15.  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).*/

let result = 0;

function func1(value) {

    let array = String(value).split('')
    for (let i = 0; i < array.length; i++) {
       result = parseInt(array[i]);
    }

    if(result>9) {
        return func1(result)
    }
    else
    {
        return result;
    }
}


console.log(func1(909))



/* Задача 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае. */

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