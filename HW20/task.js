/*
HW_20_TEXT
1.Создайте массив на 10 строк.
2.Создайте функцию comparator(a,b), которая  принимает 2 строки  и 
возвращает 1 - если первая строка длиннее, -1 если вторая строка длиннее, 
0 если равны.  
Используйте синтаксис function declaration, вызовите эту фкнкцию и 
напечатайте результат.
Напишите эту же функцию используя Function Expression и Arrow Function  
3.Напишите функцию, которая принимает массив и функцию-компаратор, 
и возвращает самое большое значение в массиве. Вызовите эту функцию, передав 
ей массив строк, полученный в первой задаче и функцию, написанную во второй задаче.
*/

const arr = [
    "cat",
    "dog",
    "elephant",
    "giraffe",
    "tiger",
    "crocodile",
    "lion",
    "monkey",
    "rhinoceros",
    "hippopotamus",
];

// Function Declaration
function comparatorDeclaration(a, b) {
  if (a.length > b.length) {
    return 1;
  }

  if (a.length < b.length) {
    return -1;
  }

  return 0;
}

// Function Expression
const comparatorExpression = function (a, b) {
  if (a.length > b.length) {
    return 1;
  }

  if (a.length < b.length) {
    return -1;
  }

  return 0;
};

// Arrow Function
const comparatorArrow = (a, b) => {
  if (a.length > b.length) {
    return 1;
  }

  if (a.length < b.length) {
    return -1;
  }

  return 0;
};

console.log(comparatorDeclaration("cat", "elephant")); // -1
console.log(comparatorExpression("cat", "elephant"));  // -1
console.log(comparatorArrow("cat", "elephant"));       // -1

function findLargest(array, comparator) {
  let largest = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (comparator(array[i], largest) === 1) {
      largest = array[i];
    }
  }

  return largest;
}

const result = findLargest(arr, comparatorDeclaration);
console.log(result); // hippopotamus