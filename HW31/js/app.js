import { add, subtract, multiply, divide } from "./math.js";
import { getCircleArea, getRectangleArea, getCircleLength } from "./geometry.js";

const sum = add(15,7);
console.log(sum);

const difference = subtract(20,8);
console.log(difference);

const product = multiply(6, 9);
console.log(product);

const quotient = divide(100, 4);
console.log(quotient);

const circleArea = getCircleArea(5);
console.log(circleArea);

const rectangleArea = getRectangleArea(8, 12 );
console.log(rectangleArea);

const CircleLength = getCircleLength(10);
console.log(CircleLength);

