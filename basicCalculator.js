
function addition(a, b){
    return a + b;
}

function substraction(a, b){
    return a - b;
}


function multiplication(a, b){
    result = a * b;
    return result;
}

function division(a, b){
    return a / b;
}

var number1 = prompt("Enter the first number: ")
var number2 = prompt("Enter the second number: ")

var operation = prompt("Enter an operation to perform (Eg: ):")

if (operation == "+")
{
    addition(number1, number2)
    console.log("Your answer is " + result)
}
else if (operation == "-"){
    substraction(number1, number2)
}
else if (operation == "*"){
    multiplication(number1, number2)
}
else if (operation == "/"){
    division(number1, number2)
}
else {
    console.log("Invalid operation!")
}