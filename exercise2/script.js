document.getElementById('calculateBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter both numbers.";
    } else {
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
                break;
            default: result = "Invalid operator.";
        }
    }

    document.getElementById('result').innerText = result;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '+';
    document.getElementById('result').innerText = '';
});
