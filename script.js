let display = document.getElementById("display");
let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

function updateDisplay(value) {
    display.textContent = value;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error"; /* Prevent division by zero */
        default: return "Error";
    }
}

console.log(`${num1} ${operator} ${num2} = ${result}`);