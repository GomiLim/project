'use strict';

//Java Script is synchronous (동기)
console.clear();

//Callback Hell example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'corder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('not access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage('ellie', 'dream');
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id)) //userStorage.getRoles
  .then((user) => alert(`Hello ${user.name}, your role is ${user.role}`))
  .catch(console.log);
