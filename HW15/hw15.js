// Попытайтесь не запуская код, определить результат каждого действия.Кратко, но понятно обьясните ответ письменно. Проверьте ваш вывод запустив код.

console.log(false == 0); // true Нестрогое равенство сравнивает два значения на равенство, предварительно приводя их к одному типу, если они изначально различаются
console.log(false === 0);// false Оператор === возвращает true только если совпадает и тип и значение. здесь разные типы (boolean и number)

console.log("" == 0);// true Пустая строка преобразуется в 0
console.log("" === 0);// false Разные типы (string и number)

console.log(null == undefined);// true При нестрогом сравнении (==) null и undefined считаются равными друг другу
console.log(null === undefined);// false Разные типы (null и undefined)

console.log("55" == 55);// true Строка "55" преобразуется в число 55
console.log("55" === 55);// false Разные типы (string и number)

console.log("true" == true);// false 
console.log("true" === true);// false 

console.log((0.2 + 0.1 - 0.3) == true);// false 
console.log((0.2 + 0.1 - 0.3) === true);// false 

console.log((0.2 + 0.1 - 0.3) == false);// true
console.log((0.2 + 0.1 - 0.3) === false);// false 


//  Adv *** ДОПОЛНИТЕЛЬНО Можно спрашивать ИИ,но важно понять почему такой ответ и внятно и кратко обьяснить 

console.log({} == {});// false Объекты сравниваются не по содержимому, а по ссылке (адресу в памяти)
console.log({} === {});// false 

console.log({} == "[object Object]"); // true JavaScript превращает объект в строку "[object Object]"
console.log({} === "[object Object]"); // false Разные типы: объект и строка.

console.log({} == true);// false Объект преобразуется в строку "[object Object]", затем в NaN; true преобразуется в 1
console.log({} == false);// false Объект после преобразований дает NaN, а false преобразуется в 0

console.log({} == 0); // false  Объект после преобразования в число дает NaN, а NaN не равен 0
console.log({} == NaN); // false NaN не равен никакому значению, даже самому NaN
