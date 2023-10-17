//Create functions to add, rest, multiply, divide and module two numbers.
//Create a function to determinate if a number is bigger than other.
//Create a function to determinate if a number is pair.


function additionOf2(a,b){
    let resultAddition= a+b;
    return resultAddition
}

let sum1 = additionOf2(14,5);
console.log(sum1);

function sustractionOf2(a,b){
    let resultSustraction= a-b;
    return resultSustraction
}

let rest1 = sustractionOf2(8,3);
console.log(rest1);

function multiplicationOf2(a,b){
    let resultMult= a+b;
    return resultMult
}

let mult1 = multiplicationOf2(7,5);
console.log(mult1);

function divisionOf2(a,b){
    let resultDiv= a/b;
    return resultDiv
}

let div1 = divisionOf2(30,6);
console.log(div1);

function moduleOf2(a,b){
    let resultModule= a%b;
    return resultModule
}

let module1 = moduleOf2(34,6);
console.log(module1);

function greaterThan(a, b){
    if(a > b){
        return `${a} es mayor`
    }else{
        return `${b} es mayor`
    }
}
    
console.log(greaterThan(545,2222))
    
    
function pairOdd(a){
    if(a % 2 == 0){
        return `${a} es par`
        }else{
        return `${a} es non`
    }
} 
    
console.log(pairOdd(13))