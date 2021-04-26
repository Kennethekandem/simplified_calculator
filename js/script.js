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

let updateValue = () => {

    // check if firstOperand is not empty
        // get innerValue, parseFloat it ( innerValue ) and update in secondOperand

    // update display and displayValue to show displayValue + innerValue
    display.innerHTML = calculator.displayValue.charAt(0) === '0' ? calculator.displayValue.substring(1) : calculator.displayValue;
}
updateValue();


let selectedKeys = (selectedKey) => {
    document.addEventListener('click', selectedKey => {
        let target = selectedKey.target || selectedKey.srcElement;

        let innerValue = target.innerHTML;

        // Move this to updateValue(), then delete from here
        let displayValue = calculator.displayValue;

        switch (target.className) {
            case 'operator':
                operator(innerValue);
                break;
            case 'decimal':
                decimal(innerValue)
                break;
            case 'eval':

                // replace with evaluate function with calculator
                alert(innerValue);
                break;
            case  'clear':
                clear(calculator)
                break
            default:

                // move this logic to updateValue()
                calculator.displayValue = displayValue + innerValue;
                // end logic

                //add innerValue to updateValue()
                updateValue();
        }
    })
}
selectedKeys();


let clear = (calculator) => {
    calculator.displayValue = '0';
    calculator.operator = null;
    calculator.firstOperand = null;
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
    // create a variable (result) with that calculate firstOperand + operator + secondOperand
    // displayValue is equal to result variable
    // call on the updateValue() function
    // update firstOperand to result variable and clear (secondOperand = null, operator = null)
