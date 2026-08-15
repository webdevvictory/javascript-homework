// HW_18_TEXT
/*
1. Напишите четыре функции для основных математических действий + - * /
2. Напишите функцию калькулятор, принимающую при вызове два числа 
и функцию операции над этими числами и возвращающую результат вычислений
3. Попробуйте написать все эти функции через function-declaration.
4. Попробуйте написать все эти функции через  function-expression.
5. *** 
Попробуйте написать все эти функции черед стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
*/

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(5, 0)); // "Error: Division by zero"
console.log(divide(5, 2)); // 2.5

console.log("====================");

function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(calculator(5, 3, add)); // 8
console.log(calculator(5, 3, subtract)); // 2
console.log(calculator(5, 3, multiply)); // 15
console.log(calculator(5, 0, divide)); // "Error: Division by zero"
console.log(calculator(5, 2, divide)); // 2.5

console.log("====================");

const addExpression = function (a, b) {
  return a + b;
};
const subtractExpression = function (a, b) {
  return a - b;
};
const multiplyExpression = function (a, b) {
  return a * b;
};
const divideExpression = function (a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
};
console.log(addExpression(5, 3)); // 8
console.log(subtractExpression(5, 3)); // 2
console.log(multiplyExpression(5, 3)); // 15
console.log(divideExpression(5, 0)); // "Error: Division by zero"
console.log(divideExpression(5, 2)); // 2.5

const calculatorExpression = function (a, b, operation) {
  return operation(a, b);
};
console.log(calculatorExpression(5, 3, addExpression)); // 8
console.log(calculatorExpression(5, 3, subtractExpression)); // 2
console.log(calculatorExpression(5, 3, multiplyExpression)); // 15  
console.log(calculatorExpression(5, 0, divideExpression)); // "Error: Division by zero"
console.log(calculatorExpression(5, 2, divideExpression)); // 2.5

console.log("====================");

const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero";
  }

  return a / b;
};
const calculatorArrow = (a, b, operation) => operation(a, b);

console.log(addArrow(5, 3)); // 8
console.log(subtractArrow(5, 3)); // 2
console.log(multiplyArrow(5, 3)); // 15
console.log(divideArrow(5, 0)); // "Error: Division by zero"
console.log(divideArrow(5, 2)); // 2.5
console.log(calculatorArrow(5, 3, addArrow)); // 8
