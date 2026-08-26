/*
HW_21-22_TEXT
1.
a) Создайте несколько объектов-продуктов. В каждом объекте 
должно быть поле name (название), description(описание), price(цена), 
info (функция, которая формирует строку вида:
товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...

b) создайте конструктор для создания объектов-товаров. 
Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая
выводит в консоль информацию о всех товарах в виде:

Tовар 1
    name: notebook lenovo thinkpad
    price: 1283
    description: .....
    info: ....
  
т.е. поле: значение При этом: поля, которые являются 
функциями, нужно выводить результат работы функции 
(не текст функции)
*/

// #1a.
const product1 = {
  name: "notebook lenovo thinkpad",
  description: "cpu intel core7, ram:16gb, ssd:512gb",
  price: 1283,
  info: function() {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  }
};

const product2 = {
  name: "smartphone samsung galaxy",
  description: "display 6.7 inch, ram:8gb, storage:256gb",
  price: 899,
  info: function() {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  }
};

const product3 = {
  name: "headphones sony wh-1000xm5",
  description: "wireless, active noise cancelling, battery:30h",
  price: 399,
  info: function() {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  }
};

console.log(product1.info());
console.log(product2.info());
console.log(product3.info());

// #1b.

const createdProduct1 = new Product("ноутбук Lenovo ThinkPad", "cpu Intel Core i7, RAM: 16GB, SSD: 512GB", 1283);
const createdProduct2 = new Product("смартфон Samsung Galaxy S23", "cpu Snapdragon 8 Gen 2, RAM: 8GB, память: 256GB", 999);
const createdProduct3 = new Product("гарнитура Sony WH-1000XM5", "wireless, активная чувствительность шума, батарея: 30 ч.", 399);

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function() {
        return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    };
}

console.log(createdProduct1.info());
console.log(createdProduct2.info());
console.log(createdProduct3.info());

// #1c.

const products = [
    createdProduct1,
    createdProduct2,
    createdProduct3
];

function printProducts(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Товар ${i + 1}`);

        for (let key in array[i]) {
            if (typeof array[i][key] === "function") {
                console.log(`${key}: ${array[i][key]()}`);
            } else {
                console.log(`${key}: ${array[i][key]}`);
            }
        }
    }
}

printProducts(products);


