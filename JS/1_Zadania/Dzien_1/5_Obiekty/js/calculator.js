var Calculator = function () {
    this.history = [];
}

Calculator.prototype.add = function(num1,num2){
    var result = num1 + num2;
    this.history.push("Added " + num1 + " to " + num2 + " got " + result );
    return result;
}

Calculator.prototype.multiply = function (num1,num2) {
    var result = num1 * num2;
    this.history.push("Multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
}

Calculator.prototype.substract = function (num1,num2) {
    var result = num1 - num2;
    this.history.push("Substracted " + num1 + " from " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function (num1,num2) {
    var result = num1 / num2;
    this.history.push("Divided " + num1 + " by " + num2 + " got " + result);
    return result;
}

Calculator.prototype.printOperations = function () {
    console.log(this.history.toString());
}

Calculator.prototype.clearOperations = function () {
    this.history = [];
}

var newCalculator = new Calculator();

newCalculator.add(2,3);
newCalculator.divide(134,2);
newCalculator.printOperations();
newCalculator.clearOperations();
newCalculator.printOperations();