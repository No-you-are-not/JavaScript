const {performance} = require('perf_hooks');
//Массивы и объекты

//1
function getSumOfNumbersInArray(array){
    let result = 0;
    for (let value of array){
        if (+(value + "") === +value ){
            result += +value;
        }
    }
    return result;
}

//alert(getSumOfNumbersInArray( [1, 2, 3, "a", 'b', 'c', '4', '5', '6', true, false, 'true']));

//2

function getRandomArray(){
    let arrLenght = Math.floor(Math.random()*100);
    let array =[]
    for (let i = 0; i < arrLenght; i++){
        array[i] = (100*Math.random()).toFixed(2);
    }
    return array;
}

function powArrayTo5(array){

    for (let value of array){
        let pow = 1;
        for (let i = 0; i < 5; i++){
            pow *= value;
        }
        console.log(pow);
    }
}

//powArrayTo5(getRandomArray());

//3
let array = ["AngularJS", "jQuery"];
array.unshift('Backbone.js');
array.push('ReactJS', 'Vue.js');
array.splice(1,0, 'CommonJS')
for (let i = 0; i < array.length; i++){
    if (array[i] === "jQuery"){
        let deleted = array.splice(i, 1);
        alert(deleted);
    }
}

//4
let str = 'Как однажды Жак звонарь сломал фонарь головой'; //‘Как Жак звонарь однажды сломал головой фонарь’
let arr = str.split(" ");
function elementMove(arr, fromIndex, toIndex) {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}
elementMove(arr, arr.indexOf("однажды"), -3)
str = arr.join(" ");
alert(str);

//5
let person = {
    name: "polina",
    age: "21",
    description: "the best proger",
    color: "pink",
    phone: "iphone",
}

//-------- 1 the value is given
let newValue = prompt("enter your value for 'person'");
let isEqual;
for (let key in person){
    if (person[key] === newValue){
        isEqual = false;
        break;
    }
    else {
        isEqual = true;
    }
    console.log(isEqual)
    console.log(`${person[key]}=${newValue}`)
}
if (isEqual){
    let newKey = prompt("enter your key for value");
    person[newKey] = newValue;
    alert(`${newKey}:${newValue}`);
}
else {
    alert('already exists')
}

// --------- 2 the key is given

let newKey = prompt("enter your key for 'person'");
if (newKey in person) {
    alert(`${newKey}:${person[newKey]}`);
} else {
    person[newKey] = prompt('Введите значение вашего свойства');
    alert(`${newKey}:${person[newKey]}`);
}

//6
let phone = {}
phone.brand = prompt("what is your phone brand?");
phone.model = prompt("what is your phone model?");
phone.color = prompt("what is your phone color?");
phone.resolution = prompt("what is your phone resolution?");
person.phone = phone;

//7
let date = {};
let currentDateval = new Date();
let yearAgoDateval = new Date();
yearAgoDateval.setDate(new Date().getDate()-365);
let userDate = prompt("enter date in format yyyy-mm-dd");
date.currentDate = currentDateval;
date.yearAgoDate = yearAgoDateval;
date.userDate = userDate;

function dateIntoNumber (date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay()
    return `${year}${month}${day}`;
}


if (dateIntoNumber(date.currentDate) > dateIntoNumber(date.userDate) && dateIntoNumber(date.userDate) > dateIntoNumber(date.yearAgoDate)){
    alert("success");
}
else {
    alert("wrong");
}


//8
function fillArray(){
    let array = [];
    let n = prompt("how many elements do you want?")
    for (let i = 1; i <= n; i++){
        let value = prompt("enter anything");
        array.push(value);
    }
    return getSumOfNumbersInArray(array);
}

alert(fillArray())

//9
let array = [];

for(let i = 1; i <= 10; i++) {
    array[i-1] = [];

    for (let j = 1; j <= 10; j++) {
        array[i-1].push(`${i} x ${j} = ${i * j}`)
    }
}

console.log(array);

// //10
let img = {
    src: "",
    alt: "",
    style: {
        border:{
            width: "1px",
            style: "solid",
            color: "#ccc",
        }
    },
    width: "200",
}


//Функции


//1
function max(num1, num2){
    return num1 > num2 ? num1 : num2;
}

//console.log(max(1,2))

//2
function min(){
    let result = [...arguments].sort();
    return result[0];
}

//console.log(min(3,4,5,8,2,1,5,22))

//3
let users = [
    {
        firstname:'POlina',
        lastname: 'superCool',
        age: 21,
    },
   {
        firstname:'Alina',
        lastname: 'notSoCool',
        age: 10,
    },
    {
        firstname:'Bobby',
        lastname: 'Brown',
        age: 41,
    },
    {
        firstname:'Baby',
        lastname: 'Boom',
        age: 1,
    },
    {
        firstname:'Mc',
        lastname: 'Pohoronil',
        age: 29,
    },
    {
        firstname:'tiktok',
        lastname: 'star',
        age: 11,
    },
    {
        firstname:'Pavel',
        lastname: 'Durov',
        age: 30,
    },
    {
        firstname:'Anonymous',
        lastname: 'Noname',
        age: 100,
    },
    {
        firstname:'Big',
        lastname: 'Boss',
        age: 18,
    },
    {
        firstname:'Auf',
        lastname: 'Wolf',
        age: 7,
    }
]

function filterYoungerThan18(arr){
return users.filter(function (el){
    return el.age < 18;
})
}

function setFullName(arr){
    users.forEach(function (element){
    element.fullname = `${element.firstname} ${element.lastname}`;
})
    return true;
}

function getFullNamesArray(arr){
let result = users.map(function (element){
    return element.fullname;
})
    return result;
}

//setFullName(users);
//console.log(users)
//console.log(getFullNamesArray(users));

//4
function myShift(array){
    return array.map(function (element, index){
        if (index > 0){
            return element
        }
    }).filter(function (element){
        if (element){
            return element;
        }
    })

}

//console.log(myShift([7,8,1,2,3,4,5]))

//5
function myPush(array){
    for (let i = array.length, count = 1; count < arguments.length; count++, i++){
        array[i] = arguments[count];
    }
    return array;
}

//console.log(myPush([1,2,3,4],3,4,5,6,7));

//6
function myObjectAssign(object){
for (let i = 1; i < arguments.length; i++){
        object[Object.keys(arguments[i])] = Object.values(arguments[i])[0];
}
return object;
}

console.log(myObjectAssign({k:4}, {a:1}, {d:"bbb"}, {c:true}))

//7
function setComment(date, message, author = 'Anonymous'){
    if (!date || !message){
        alert("incorrect data");
    }
    else {
        console.log(`${author}, ${date}
    ${message}`)
    }
}


//Замыкания

//1
function createTimer(){
    let time = performance.now();
    return function (){
        let timePast = performance.now();
        return `the code was running for ${timePast - time} ms`;
    }
}


let timer = createTimer();
alert("1");
alert(timer());

//2
function createAdder(value1){
    return function (value2){
        return `${value1 + value2}`;
    }
}

let hello = createAdder('polina ');
console.log(hello('proger'))
console.log(hello('boss'))

let count = createAdder(5);
console.log(count(4));


