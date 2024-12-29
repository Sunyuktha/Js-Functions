let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateResult(currentInput);
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (operator === null || currentInput === '') return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    let computation;
    switch (operator) {
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case '*':
            computation = prev * curr;
            break;
        case '/':
            computation = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }

    currentInput = computation.toString();
    operator = null;
    previousInput = '';
    updateResult(currentInput);
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateResult('0');
}

function updateResult(value) {
    document.getElementById('result').value = value;
}
