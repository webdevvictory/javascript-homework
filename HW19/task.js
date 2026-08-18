/*
 HW_19_TEXT
Задайте массив целых чисел, например [1 5 2 9 4]
1.Реализуйте алгоритм простой сортировки пузырьком от меньщего к большему.
2.*** Для отсорторированного массива реализуйте метод бинарного поиска,
если число в массиве есть , то верните индекс, а если нет, то верните -1
*/
const numbers = [1, 5, 2, 9, 4];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers); // [1, 2, 4, 5, 9]
