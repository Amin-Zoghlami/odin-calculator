function add(a, b) {
    a = Number(a);
    b = Number(b);
    const sum = `${Math.round((a + b) * 1000) / 1000}`;
    if (sum.length >= 12) {
        return "OVERFLOW";
    }
    return `${sum}`;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    const difference = `${Math.round((a - b) * 1000) / 1000}`;
    if (difference.length >= 12) {
        return "OVERFLOW";
    }
    return `${difference}`;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    const product = `${Math.round((a * b) * 1000) / 1000}`;
    if (product.length >= 12) {
        return "OVERFLOW";
    }
    return `${product}`;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b === 0) {
        return "ERROR";
    }
    const quotient = `${Math.round((a / b) * 1000) / 1000}`;
    if (quotient.length >= 12) {
        return "OVERFLOW";
    }
    return `${quotient}`;
}

function putNumber(num) {
    if (displayNumber.length >= 12) {
        return;
    }
    displayNumber += `${num}`;
    changeDisplay();
}

function putDecimalPoint() {
    if (!hasDecimalPoint) {
        displayNumber += '.';
        changeDisplay();
        hasDecimalPoint = true;
    }
}

function deleteDigit() {
    if (displayNumber === "") {
        return;
    }
    if (displayNumber.charAt(displayNumber.length - 1) === '.') {
        hasDecimalPoint = false;
    }
    displayNumber = displayNumber.slice(0, -1);
    changeDisplay();
}

function clearAll() {
    displayNumber = "";
    previousNumber = "";
    currentOperator = '';
    hasDecimalPoint = false;
    changeDisplay();
}

function operate(a, b) {
    // Stops operate with no second input
    if (displayNumber === "") {
        return;
    }

    if (currentOperator === '+') {
        displayNumber = add(a, b);
        changeDisplay();
    } else if (currentOperator === '-') {
        displayNumber = subtract(a, b);
        changeDisplay();
    } else if (currentOperator === '*') {
        displayNumber = multiply(a, b);
        changeDisplay();
    } else if (currentOperator === '/') {
        displayNumber = divide(a, b);
        changeDisplay();
    }
        previousNumber = displayNumber;
        displayNumber = "";
        hasDecimalPoint = false;
}

function changeDisplay() {
    display.textContent = displayNumber;
}

let displayNumber = "";
let previousNumber = "";
let currentOperator= '';
let hasDecimalPoint = false;

const display = document.querySelector(".display");

for (let i = 0; i < 10; i++) {
    const numberButton = document.querySelector(`.button${i}`);
    numberButton.addEventListener("click", () => putNumber(i));
}

const decimalButton = document.querySelector(".decimal")
decimalButton.addEventListener("click", () => putDecimalPoint());

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => deleteDigit());

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clearAll());

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    operate(previousNumber, displayNumber)   
    currentOperator = '';
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    operate(previousNumber, displayNumber);
    currentOperator = '+';
});

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
    operate(previousNumber, displayNumber);
    currentOperator = '-';
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    operate(previousNumber, displayNumber);
    currentOperator = '*';
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    operate(previousNumber, displayNumber);
    currentOperator = '/';
});

