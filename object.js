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

powArrayTo5(getRandomArray());

//3
