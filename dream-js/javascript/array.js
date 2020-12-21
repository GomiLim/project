"use strict";
// 어떻게 담아놓느냐에 따라 달라요
// object : 서로 연관된 특징과 행동들을 묶어놓은 것들을 말함
// 비슷한 object 를 묶어 놓은걸 자료구조 라고 합니당!!

//Array

//1. Declaratiom

const arr1 = new Array();
const arr2 = [1, 2];

//2. Index Position
const fruits = ["🙎🏻‍♀️", "🧚🏻‍♀️"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

console.clear();
//3. Looping over an array
// way1
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let value of fruits) {
  //let 을 적어줘야하는구낭
  console.log(value);
}

fruits.forEach((ele) => console.log(ele));

//4. push, pop, unshift, shift
// push pop 이 unshift, shift 보다 빠르다!
//splice

fruits.push("🤦🏻‍♀️", "🧜🏻‍♀️", "👨‍👩‍👦");
console.log(fruits);
fruits.splice(1, 1, "🐶", "🐯");
console.log(fruits);

//consst
const fruit3 = ["🙈", "🦊"];
const newFruits = fruits.concat(fruit3);
console.log(newFruits);

//5. searching
//find th index
console.clear();
console.log(fruits);

//indexOf
console.log(fruits.indexOf("🤦🏻‍♀️")); //number (true ? index / false ? -1)

//includes
console.log(fruits.includes("👨‍👩‍👦")); //boolean (true / false)

//lastIndexOf
fruits.push("🙎🏻‍♀️");
console.log(fruits.indexOf("🙎🏻‍♀️"));
console.log(fruits.lastIndexOf("🙎🏻‍♀️"));
