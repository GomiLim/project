"use strict";
console.clear();

//JSON
//Javascript Object Notation

//1. Object to JSON
//stringfy(obj)

let json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), //js에만 있는거라 출력 안됨
  jump: () => {
    // method는 출력 안됨
    console.log(`${name} can jjump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key} value : ${value}`);
  // return value;
  return key === "name" ? "ellie" : value;
});

console.log(json);

//2. Json to Object;
//parse(json)
console.clear();
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key} value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); <- JSON으로 안올라갔었어서, 여기선 출략 안됨

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // 얘네는, 스트링이라 안된거였음
