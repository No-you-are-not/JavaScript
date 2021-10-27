//Переменные и выражения

//1
let first = 10;
let second = first*3;
let third = first + second;

console.log(`1: ${first}, 2: ${second}, 3: ${third}`);

//2
let firstName = prompt("Enter your first name)", "noname");
let lastName = prompt("Enter your last name)", "anonimus");
alert(`What’s up ${firstName} ${lastName}`);

//3
let x = prompt("Enter first number", "0");
let y = prompt("Enter second number", "0");
alert(`x * y: ${x * y}`);
alert(`x / y: ${x /y }`);
alert(`x + y: ${+x + +y}`);
alert(`x - y: ${x - y}`);

//4
let workingHour = prompt("How many hours did you work?", "0");
let workingDays = prompt("How many days did you work?", "0");
let workingRate = prompt("What is your rate?", "0");

let money = 4 * workingDays * workingHour * workingRate;
alert(`your money is ${money}`);

//5
function isNUmberEven(number){
    return number % 2 ? "number is uneven":"number is even";
}

console.log(isNUmberEven(3));
console.log(isNUmberEven(32.3));
console.log(isNUmberEven(2));

//6
function isValueNumber(value){
    if (typeof (+value) === 'number' && !isNaN(+`${value}`)){
        return "the value is a number";
    }
    return "the value is not a number";
}

console.log(isValueNumber(2));
console.log(isValueNumber("2"));
console.log(isValueNumber("a"));
console.log(isValueNumber(true));
console.log(isValueNumber(undefined));
console.log(isValueNumber([true]));

//7
let random = Math.round(Math.random()*100);
let userNumber = prompt("enter your number", "0");
alert(`${random} > ${userNumber} = ${random > userNumber}`)

//8
let str = prompt("what do you like to study?", "Мне нравится изучать Front-end");
let str2 = prompt("what else do you like to study?");
if ((str.toLowerCase()).includes(str2.toLowerCase())){
    alert("you've already said it");
}
else {
    let result = str.substring(0, 21); //"Мне нравится изучать";
    alert(`${result} ${str.substring(21, 30)}, ${str2}`);
}
//Условные и логические операторы

//1
let number = prompt("enter your number", '0');
function isNumberPosNegNul(number){
    if (number === 0){
        return "the number is 0";
    }
    if (number > 0){
        return "the number is positive";
    }
    return "the number is negative";
}
alert(`${isNumberPosNegNul(number)}`)

//2
let myMoney = prompt("how much money do you have?", '0');
let friendMoney = prompt("how much money does your friend have?", '0');
let decision = +myMoney + +friendMoney > 1000 ? "we are going to Mallorca!!!" : "we are drinking beer((("
alert(decision);

//3
let age = prompt("how old are you?", '18');
if (age >=20 && age < 27){
    alert("Выслать повестку");
}

//4
let carNumber = prompt("what is the car number?");
alert(carNumber == "7" || carNumber == '255' || carNumber == "225" ? "you are going home!":"you have to wait(((");

//5
let day = new Date().getDay();
if (day !== 6 || day !== 0){
  alert("you have to go to work today!");
}

//6
let x = prompt("enter number in range from -20 to 20", '0');
let y = prompt("enter number in range from -20 to 20", '0');
if ((x > 20 || x < -20) || (y > 20 || y < -20)){
    alert("numbers should be in range from -20 to 20!");
}
else if (x <= 1 && (y >= 3 || y < 0)){
    alert(`${x} + ${y} = ${+x + +y}`);
}
else {
    alert("Wrong!");
}

//7
if ((x > 2 && x < 11) || (y >=6 && y < 14)){
    alert(x * 2);
}
else {
    alert(+x + 5);
}

//8
let name = prompt("give me your name");
if (name){
    alert(`hi ${name}`);
}
else {
    alert(`whatever`);
}

//9
let greeting = "";
let lang = ['ru', 'en', 'de'];
let choice = prompt("what language is prefered?(ru, en, de)");
switch (choice){
    case lang[0]:
        greeting += "Приветик)";
    break;
    case lang[1]:
        greeting += "hi hi)";
        break;
    case lang[2]:
        greeting += "guten morgen)";
        break;
    default:
        greeting += "i don't know this language(((";
}

alert(greeting);

//10

let month = new Date().getMonth();
switch (month){
    case 2:
    case 3:
    case 4:
        alert("it is spring!!!!");
        break;
    case 5:
    case 6:
    case 7:
        alert("it is summer!!!!");
        break;
    case 8:
    case 9:
    case 10:
        alert("it is fall(((");
        break;
    case 11:
    case 0:
    case 1:
        alert("it is winter(((");
        break;
}

//11
let lang = ['ru', 'en'];
let ruDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let enDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let langChoice = prompt("what is your prefered language?(ru, en)");
let dayChoice = prompt("what day do you want?(0-sunday,..., 6-saturday)");

if (!lang.includes(langChoice) || !ruDays.includes(dayChoice) || !enDays.includes(dayChoice)){
    alert("i don't know this language or there is no such day");
}
else {
    switch (langChoice){
        case 'ru':
            alert(ruDays[dayChoice]);
            break;
        case 'en':
            alert(enDays[dayChoice]);
            break;
    }
}

//12
let name = prompt("what is your name?");
let age = prompt("how old are you?");
switch (name, +age){
    case "Kate", 15:
    case "John", 29:
        alert(`Hi ${name} ${age}`);
        break;
    default:
        alert("bye(((");
}

(name === 'Kate' && +age === 15) || (name === 'John' && +age === 29) ? alert(`Hi ${name} ${age}`): alert("bye(((");


//Циклы

//1
let str ="."
for (let i = 0; i < 5; i ++){
    str += "#.";
}

console.log(str)

//2
for (let i = 0; i < 10; i++){
    if (!(i % 2)) {
        console.log(i * i)
    }
}

//3
let name = "SuperBoss"
for (let i = 1; i < 5; i++){
    let congrats = "Happy birthday to you";
    if (!(i % 3)){
        congrats = `Happy birthday to ${name}`;
    }
    console.log(congrats);
}

//4
let isOk = confirm("press ok if you don't want any problems!")
while (!isOk){
    isOk = confirm("press ok if you don't want any problems!");
}

//5
let endNumber = prompt("enter any number");
let result = 0;
if (endNumber){
    for (let i = 1; i <= endNumber; i++){
        result += i;
    }
}
alert(result);

//6
let count = 0;
while (true){
    let random = Math.random();
    count++;
    if (random > 0.9){
        alert(`count: ${count}, number: ${random}`);
        break;
    }
}

//7
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//8
let finalSring = ""
for (let start = 0, second = 1, fibNum = 0; start < 50;finalSring += ` ${start}`, fibNum = start + second, start = second, second = fibNum){
}
console.log(finalSring);


//9
let number = prompt("enter any number");
let sum = 0;
let count = 0;
while (number){
sum += +number;
count ++;
number = prompt("enter any number");
if (!number){
    alert(`count: ${count}, sum: ${sum}, avg: ${sum/count}`);
    break;
}
}

//10
let password = "polinaiscool";
let answer = prompt("what is the password?");
if (password !== answer){
    while (password !== answer) {
        if (!answer) {
            let isQuit = confirm("are you sure you want to cancel?");
            if (isQuit) {
                alert("you canceled authorization ");
                break;
            } else {
                answer = prompt("what is the password?");
            }
        } else {
            answer = prompt("what is the password?");
        }
    }
}
else if (password === answer){
    alert("success!")
}

//11
for (let i = 1; i <= 50; i++){
    let result = i;
    if (!(i % 3)){
       result = "Fizz";
    }
    if (!(i % 5)){
        result = "Buzz";
    }
    if (!(i % 15)){
        result = "FizzBuzz";
    }
    console.log(result)
}
