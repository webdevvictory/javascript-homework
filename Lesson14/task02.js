// без объектов
let userName = "Vasya";
let userAge = 25;
let isStudent = true;

console.log("Age= ", userAge);

// в виде объекта
let user = {
  name: "Ivan",
  age: 25,
  isStudent: true,
};

console.log(user);
console.log(user.name);

user.age = 26;
console.log(user);

user.email = "ivan@teat.com";
console.log(user);

delete user.isStudent;
console.log(user);

const user1 = {
  name: "Jack",
  age: 32,
};
console.log(user1);
// user1=25 ERROR
// user1=user
user1.age = 33;
user1.email = "test@test.com";
console.log(user1);

console.log(typeof user1, typeof user1.name);
