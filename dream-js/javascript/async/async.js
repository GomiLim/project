'use strict';

function add(a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(1, 2));

//1. async : promise 로 만들기
async function fetchUser() {
  //do network reqeust in 10secs....
  return 'ellie';
  // return new Promise((resolve, reject) => {
  //   //do network reqeust in 10secs....
  //   return 'ellie';
  // });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await : 기다려! -> asyc와 같이 써야합니당.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}
async function getBanana() {
  await delay(2000);
  return '🍌';
}

// 만약 await를 안썻다면?
// function getBanana() {
//   return delay(3000)
//   .then(()=>'🍌');
// }

async function pickFruits() {
  const applePromise = getApple(); //promise는 만들면 바로 실행되는걸 이용하는 방법. apple와 banana가 로드되는데 서로 연관이 없기에
  const bananaPromise = getBanana(); //병렬처리해주는겁니다.
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

//3. promise all
function pickAillFruits() {
  return Promise.all([getApple(), getBanana()]).then(
    (fruits) => fruits.join(' + ') //Promise.all 은 배열을 반환합니다
  );
}

pickAillFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); //처음 로드된것을 반환합니다.
}

pickOnlyOne().then(console.log);
