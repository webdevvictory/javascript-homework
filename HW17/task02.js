// hw17text
/*
2. Напишите программу,
которая проверяет и печатает вердикт ,
является ли целое положительное
число  длины 6 цифр счастливым зеркално!
ЕСЛИ  Сумма перваых 3 цифр равна
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет.
123420 -1+2+3 = 4+2+0 счастливое
712004- 7+1+2 != 0+0+4 не счастливое
*/
let n = 123420;
let nStr = n.toString();

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < nStr.length; i++) {
    if (i < nStr.length / 2) {
        leftSum += parseInt(nStr[i]);
    } else {
        rightSum += parseInt(nStr[i]);
    }
}

if (leftSum === rightSum) {
    console.log("Счастливое число");
} else {
    console.log("Не счастливое число");
}