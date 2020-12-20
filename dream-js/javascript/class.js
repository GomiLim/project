"use stric";
// Object-oriendted programmin
//class :template
//object : instance of a class
//javaScript class
// -introduce in ES6
// -syntacical sugar over 'prototype-based' inheritance

// 1. class declaretions

class Person {
  //constructor
  constructor(name, age) {
    //fileds

    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const elie = new Person("ellie", 20);
console.log(elie.name);
console.log(elie.age);
elie.speak();

class Article {
  static publisher = "Dream";
  constructor(articleName) {
    this.articleName = articleName;
  }

  static printPublisher() {
    console.log(`${Article.publisher}: hi!`);
    // console.log(`${this.publisher}: hi!`);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
console.log(Article.publisher);
Article.printPublisher();

//shape

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getColor() {
    return console.log(`color : ${this.color}`);
  }

  getSize() {
    return console.log(`size : ${this.width * this.height}`);
  }
}

const ractangle = new Shape(20, 20, "blue");
ractangle.getColor();
ractangle.getSize();

class Triangle extends Shape {
  // Shape을 확장할 수 있답니다~
  getColor() {
    super.getColor(); // 갱신하지 않고 기존 값을 가져오는것!
    return console.log(`🙆🏻‍♂️`); // update!!
  }
  getSize() {
    return console.log(`size : ${(this.width * this.height) / 2}`); //이런식으로 업데이트가 가능합니다!
  }
  toString() {
    return "ㅁㅔ롱이다 ㅋ";
  }
}
const triangle = new Triangle(20, 20, "pink");

triangle.getColor();
triangle.getSize();

console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true , Triangle 자체가 Shape의 상속이기때문입니다.
console.log(triangle instanceof Object); //class는 js의 obj를 상속받은것 입니당
console.log(triangle.toString()); //class는 js의 obj를 상속받은것 입니당

// 따라서, class 내부에서 obj 함수 결과값 변경이 가능하답니다~~~~
