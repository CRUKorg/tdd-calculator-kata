import Operations from './Operations';
const operations = new Operations();

class Calculator {
    calculate (numberOne, numberTwo, operator) {
        if(operator == "+"){
            return operations.add(numberOne, numberTwo);
        };
    }
}

module.exports = Calculator;