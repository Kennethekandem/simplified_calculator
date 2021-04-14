let selectedKey = document.getElementsByTagName('span').innerHTML;
let display = document.querySelector('.screen');
// end variables from html

const calculator = {
    displayValue: '0', // Display the value selected
    firstOperand: null, // first value to calculated
    waitingForSecondOperand: false, // second value to be calculated
    operator: null // get the operator selected
}

// Display the value of calculator.displayValue
let updateValue = () => {
    display.innerHTML = calculator.displayValue.charAt(0) === '0' ? calculator.displayValue.substring(1) : calculator.displayValue;
}
updateValue();


let selectedKeys = (selectedKey) => {
    document.addEventListener('click', selectedKey => {
        let target = selectedKey.target || selectedKey.srcElement;

        let innerValue = target.innerHTML;
        let displayValue = calculator.displayValue;

        switch (target.className) {
            case 'operator':
                alert(innerValue);
                break;
            case 'decimal':
                alert(innerValue)
                break;
            case 'eval':
                alert(innerValue);
                break;
            case  'clear':
                clear(calculator)
                break
            default:
                calculator.displayValue = displayValue + innerValue;
                updateOperator(calculator.displayValue)
                updateValue();
        }
    })
}
selectedKeys();


let updateOperator = (innerValue) => {
    calculator.operator = innerValue.substring(1);
}

let clear = (calculator) => {
    calculator.operator = null;
    calculator.displayValue = '0';
    updateValue();
}
