// hw17text
/*
1. Напишите программу,
которая проверяет проверяет и печатает вердикт ,
является ли целое положительное число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет.
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое
 
*/
let n = 1210;
let nStr = n.toString();

let evenPositionSum = 0;
let oddPositionSum = 0;

for (let i = 0; i < nStr.length; i++) {
    if (i % 2 === 0) {
        oddPositionSum += parseInt(nStr[i]);
    } else {
        evenPositionSum += parseInt(nStr[i]);
    }
}

if (evenPositionSum === oddPositionSum) {
    console.log("Счастливое число");
} else {
    console.log("Не счастливое число");
}