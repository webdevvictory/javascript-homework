console.log("Hello world");

// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//ctrl+` - открыть терминал
//Ctrl+F5 - run without debugging

let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    email: 'john@example.com',
    "city": 'New York',
    "is a developer": true
}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.email);
console.log(user.city);
console.log(user);

console.log(user["name"]);
let fieldName="age";
console.log(user[fieldName]);
user["second name"]="Smith";
console.log(user["second name"]);

console.log("================================");
console.log(user);
console.log("================================");

let userJson=JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson); // string
console.log(user.name);
console.log(userJson.name); // undefined

let productJson='{"name":"iPhone","price":999,"isAvailable":true}';
let product=JSON.parse(productJson);
console.log(product);// { name: 'iPhone', price: 999, isAvailable: true }
console.log(typeof product);// object
console.log(product.name);// iPhone








