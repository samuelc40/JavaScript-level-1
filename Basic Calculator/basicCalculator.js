

function calculate() {
    var firstNumber = parseFloat(document.getElementById("first").value);
    var secondNumber = parseFloat(document.getElementById("second").value);
    var operation = document.getElementById("operation").value;
    var result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            document.getElementById("hello").innerText = "Result is " + result;
            break;
        case '-':
            result = firstNumber - secondNumber;
            document.getElementById("hello").innerText = "Result is " + result;
            break;
        case '*':
            result = firstNumber * secondNumber;
            document.getElementById("hello").innerText = "Result is " + result;
            break;
        case '/':
            result = firstNumber / secondNumber;
            document.getElementById("hello").innerText = "Result is " + result;
            break;
        default:
            result = "Invalid operation";
            document.getElementById("hello").innerText = "Your Entered operation " + operation + " is Invalid !!!";
    }
}
