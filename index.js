/* Блок 1. Задача 1. Длина наибольшего отрезка */

let firstLength = -21; 
let secondLength = 12 
let thirdLength= 12

if (firstLength>=secondLength) {
    if (firstLength>=thirdLength) {
    console.log(`Наибольший отрезок: ${firstLength}`); 
    }

    else {
        console.log(`Наибольший отрезок: ${thirdLength}`); 
    }
}

else {
    if (secondLength>=thirdLength) {
        console.log(`Наибольший отрезок: ${secondLength}`);
    }

    else {
        console.log(`Наибольший отрезок: ${thirdLength}`); 
    }
}

/* Блок 1. Задача 2. Система рекомендаций для пользователя */

let temperature = 20; /* ввести любое значение */

switch (true) {
    case temperature<-30:
        console.log("Оставайтесь дома!");
        break;
    
    case temperature>=-30 && temperature<=-10:
        console.log("Сегодня холодно");
        break;
            
    case temperature>=-10 && temperature<=5:
        console.log("Не холодно");
        break;

    case temperature>=5 && temperature<=15:
        console.log("Тепло");
        break;

    case temperature>=15 && temperature<=25:
        console.log("Оставайтесь дома!");
        break;

    case temperature>=25 && temperature<=35:
        console.log("Жарко!");
        break;    

    case temperature>=35:
        console.log("Смерть!");
        break;  
}

/* Блок 1. Задача 3. Информация о пользователе */


let role = "bot"; 

switch (role) {
    case "user":
        console.log("Name: John \nAge: 30 \nProfession: doctor");
        break;
    case "admin":
        console.log("Name: Lisa \nAge: 23 \nProfession: technical support");
        break;
    case "manager":
        console.log("Name: Stan \nAge: 25 \nProfession: manager");
        break;
    case "bot":
        console.log("Name: none \nAge: none \nProfession: bot");
        break;
    default:
        console.log("The user is not identified");
        break;
}


/* Блок 2. Что выведет комбинация данных  */

/* 
null || 0 || "" || undefined  -- Вернет undefined, особенность JS. undefined == true
“яблоко” && true && null && 1 -- Вернет первое значение, равное false. Это null
0 || true && “false” || null -- Сначала выполняется сравнение с оператором && - оба верны, возвращается последнее значение - 'false'.
Затем сравнивается с 0 и null через ||. Возвращает первое true. Строка 'false' является true
0 && true || “false” && null -- Выведится null. Сначала сравниваются && в начале и в конце. Берется первое false - это 0 и null. Затем
они сравниваются через ||. Оба false => возвращает последнее значение - это null
!0 && !!1 -- сначала сравниваются 0 и 1 через &&. Возвращает 0, т.к он false. Тройным ! превращается в true
!(null || !”апельсин” && true) -- вернет true. В скобках сравнивает &&. Там оба верны значения => берется первое.
Оно сравнивается с null через ||. Возвращает null, тк он false. За счет ! false превращается в true
*/

/* Блок 3. Задача 1. Вывести в консоль заданную строку N раз.  */

let startCount = 0;
let Count = 15;

while (startCount<Count) {
    console.log("MISS ME?");
    startCount=startCount+1; 
}

/* Блок 3. Задача 2. Задача про автомобили.  */

let startValueCar = 300;
let endValueCar = 100;
let index = 0;

for (; startValueCar >= endValueCar; index++) {
    startValueCar=startValueCar/2;
}

console.log(`Машины распроданы за ${index} дней`);

/* Блок 3. Задача 3. Анализируем временной промежуток.  */

let startYear = 1800;
let endYear = 2020; 
countLeapYear = 0;
count=0;
for (; startYear <= endYear; ) {
    count=count+1;
    if (startYear==1961) {
        console.log(`Первый полет человека в космос: ${startYear}. Количество итераций: ${count}`);    
    }

    if (startYear%4==0) {
        countLeapYear = countLeapYear+1;
    }

    startYear=startYear+1;
}

console.log(`Количество високосных отрезков во временном промежутке: ${countLeapYear}. Количество итераций: ${count}`);