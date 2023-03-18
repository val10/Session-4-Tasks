let displayValue = '';
let firstNumber = null;
let operation = null;

//insert pushed number to the display
function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

//clear the values from the display
function clearDisplay() {
    displayValue = '';
    firstNumber = null;
    operation = null;
    document.getElementById('display').value = displayValue;
}

//taking math operator
function setOperation(mathOperator) {
    firstNumber = parseFloat(displayValue);
    operation = mathOperator;
    displayValue = '';
}

// math execution 
function operate() {
    const secondNumber = parseFloat(displayValue);
    let result = 0;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}