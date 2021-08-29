function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
    }
}

console.log(mathOperation(10, 12, "+"));
console.log(mathOperation(14, 16, "-"));
console.log(mathOperation(18, 20, "/"));
console.log(mathOperation(22, 24, "*"));
