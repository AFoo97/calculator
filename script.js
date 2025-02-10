let display = document.getElementById("display");
let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

function updateDisplay(value) {
    display.textContent = value;
}

document.querySelectorAll(".btn.number").forEach(button => {
    button.addEventListener("click", () => {
        if (resultDisplayed) {
            currentInput = "";
            resultDisplayed = false;
        }
        currentInput += button.getAttribute("data-number");
        updateDisplay(currentInput);
    });
});

document.querySelectorAll(".btn.operator").forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber !== "" && operator !== "" && currentInput !== "") {
            secondNumber = currentInput;
            let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            updateDisplay(result);
            firstNumber = result;
            currentInput = "";
            resultDisplayed = true;
        } else if (currentInput !== "") {
            firstNumber = currentInput;
        }
        operator = button.getAttribute("data-operator");
        currentInput = "";
    });
});

document.getElementById("equals").addEventListener("click", () => {
    if (firstNumber !== "" && currentInput !== "" && operator !== "") {
        secondNumber = currentInput;
        let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        updateDisplay(result);
        firstNumber = result;
        currentInput = "";
        operator = "";
        resultDisplayed = true;
    }
});

document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay("0");
    resultDisplayed = false;
});

document.getElementById("backspace").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
});

document.getElementById("decimal").addEventListener("click", () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
    }
});

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error";
        default: return "Error";
    }
}


