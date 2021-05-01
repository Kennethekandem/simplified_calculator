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

//get innerValue == null and target.className = null

let updateValue = (innerValue = null, target = null) => {


    // check if firstOperand is not empty
        if(calculator.firstOperand !== null) {
            // get innerValue, parseFloat it ( innerValue ) and update in secondOperand
            calculator.waitingForSecondOperand = parseFloat(innerValue);
        }

    // update display and displayValue to show displayValue + innerValue
    let displayValue = calculator.displayValue;

    if(innerValue !== null) {
        calculator.displayValue = displayValue + innerValue;
    }

    display.innerHTML = calculator.displayValue.charAt(0) === '0' ? calculator.displayValue.substring(1) : calculator.displayValue;
}
updateValue();


let selectedKeys = (selectedKey) => {
    document.addEventListener('click', selectedKey => {
        let target = selectedKey.target || selectedKey.srcElement;

        let innerValue = target.innerHTML;

        switch (target.className) {
            case 'operator':
                operator(innerValue);
                break;
            case 'decimal':
                decimal(innerValue)
                break;
            case 'eval':

                // replace with evaluate function with calculator
                eval(calculator);
                break;
            case  'clear':
                clear(calculator)
                break
            default:

                //add innerValue to updateValue()
                updateValue(innerValue);
        }
    })
}
selectedKeys();


let clear = (calculator) => {
    calculator.displayValue = '0';
    calculator.operator = null;
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    updateValue();
}

let decimal = (innerValue) => {

    let check = calculator.displayValue.includes(innerValue);

    if(!check) {
        calculator.displayValue = calculator.displayValue + innerValue;
        updateValue();
    }
}

let operator = (innerValue) => {

    if(!calculator.operator) {
        calculator.firstOperand = parseFloat(calculator.displayValue);

        calculator.displayValue = calculator.displayValue + innerValue;
        updateValue();

        calculator.operator = innerValue;
    }

}

// evaluate function will carry the calculator

let eval = (calculator) => {

    //covert operator to int
    let operator = calculator.operator

    let math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },
    };

    // create a variable (result) with that calculate firstOperand + operator + secondOperand
    let result = math_it_up[operator](calculator.firstOperand, calculator.waitingForSecondOperand);

    // displayValue is equal to result variable
    calculator.displayValue = String(result);
    calculator.firstOperand = null

    // call on the updateValue() function
    updateValue();
    // update firstOperand to result variable and clear (secondOperand = null, operator = null)
    calculator.firstOperand = parseInt(result);
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}
