const obj1 = {}; // literal syntax
const obj2 = new Object(); //constructor syntax;

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };

print(ellie);

ellie.hasJob = true;
delete ellie.hasJob;

//2. computed properties
// key should be always string
console.log(ellie.name); // 코딩할땐 이렇게 적어줌
ellie["hasJob"] = true; //run time 에서 출력할땐, 이렇게 출력함
console.log(ellie["name"]);

//3. Property value shorthand
const person1 = { name: "bob", age: "2" };
const person2 = { name: "steve", age: "3" };
const person3 = { name: "dave", age: "4" };
const person4 = makePerson("ellie", "30");
const person5 = new Person("ellie", "30");

function makePerson(name, age) {
  return { name, age };
}
//이렇게 class 같이 쓰는 애들은 this를 활용해서 만들어 준답니당
//4. constructor Function;
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this
}

//5. in operator (key in obj) : ellie obj안에 name 이라는 key 가 있는지 확인 : 값 : boolean
console.log("name" in ellie);
console.log("age" in ellie);

//6. for in/ for of
//for(key in obj) - 오브젝트용
for (key in ellie) {
  console.log(key);
}

//for (value of iterable) - 배열용
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

//7. fun cloneing
const user = { name: "ellie", age: "20" };
const user2 = user;
console.log(user2);

//old way

const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.log(user3);

//New way
const user4 = {};
Object.assign(user4, user);

const user5 = Object({}, user);

//
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
//fruit2 같이 뒤에 있는 애가, 앞에있는거 덮어버림
