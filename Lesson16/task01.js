let temperature = 118;
// Python: and or not
// JS: && || !
if (temperature <0) {
    console.log('Очень холодно');
} else if (temperature >=0 && temperature <20) {
    console.log('Холодно');
} else if (temperature >=20 && temperature <30){
    console.log('Тепло');
} else {
    console.log('Очень жарко');
}
if (temperature <0) {
    console.log('Очень холодно');
} else if ( temperature <20) {
    console.log('Холодно');
} else if (temperature <30){
    console.log('Тепло');
} else {
    console.log('Очень жарко');
}

let number = 5;
console.log(number % 2 === 0 ? 'четное' : 'нечетное'); // нечетное

let age=25;
let isAdult= age >= 18;
console.log(isAdult ? 'совершеннолетний' : 'Не достиг совершеннолетия'); // совершеннолетний

number = 5;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Unknown day");
}

let myName; // для замены данного значения на null или undefined используется оператор nullish coalescing (??), который возвращает правый операнд, если левый операнд равен null или undefined. В данном случае, так как myName не определено, result будет "Anonymous".
let result = myName ?? "Anonymous"; // Если myName не определено (undefined или null), то result будет "Anonymous"
console.log(result); // Unknown

let price = 25.5;
console.log(price ?? "Price not available"); // 25.5