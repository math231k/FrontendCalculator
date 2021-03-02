function calculate() {
    var number1 = parseFloat($("#number1").val());
    var number2 = parseFloat($("#number2").val());
    var operator = $("#operator").val();
    if(operator === "^"){
        calculatePower(number1, number2)
    }
    var equation = number1 + operator + number2;
    var result = eval(equation);
    $("#result").val(result);
}

function reset(id) {
    $("#" + id + "> .form-control").clear();
}

var f = [];
function factorial (n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if (f[n] > 0) {
        return f[n];
    }
    return f[n] = factorial(n-1) * n;
}

function calculateFactorial() {
    var n = parseInt($("#fact-number").val());
    var result = factorial(n);
    $("#fact-result").val(result);
}

function calculatePower(x, y){
    x = parseInt($("#pow-number").val());
    y = parseInt($("#exp-number"))
    var result = Math.pow(x, y);
    $("#pow-result").val(result);
}
