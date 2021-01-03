'use strict';

//Promise is a JavaScript object for asynchronous operation
//State : pending -> fulfilled or rejected (기능 수행중인지, 성공했는지, 실패했는지)
//Producer(제공하는사람) vs Consumer(소비하는사람)

//1. Producer
// 새로운 프로미스가 생성됐을떄, executor가 바로 실행됩니당
const promise = new Promise((resolve, reject) => {
  //doing some heavy work
  //바로 실행됨 주의!
  console.log('doing somthing...');

  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

//Consumers : than, catch, finally

promise
  .then((value) => {
    //value엔 ellie 가들어옵니당
    //than 은 성공했을떄 들어오는 값
    console.log(value);
  })
  .catch((error) => {
    //실패했을때
    console.log(error);
  })
  .finally(() => {
    //성공 실패와 상관없이
    console.log('finally');
  });

//3.Promise chaning

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error handling
const getPeople = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('😀'), 1000);
  });
const getAlcohol = (people) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${people} =>🍺`), 1000);
    setTimeout(() => reject(new Error(`${people} =>🍺`)), 1000);
  });
const getDrunkenPerson = (alcohol) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${alcohol} =>🤮`), 1000);
  });

getPeople()
  .then(getAlcohol) // 한가지만 받아서 그대로 보낼떈, 지얼헤 적어도 돼욤 (people) => getAlcohol(people)
  .catch((error) => {
    return '🤢';
  })
  .then(getDrunkenPerson)
  .then(console.log)
  .catch(console.log);
