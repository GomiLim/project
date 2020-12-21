"use strict";

//Java Script is synchronous (동기)
console.clear();
console.log(1);
setTimeout(function () {
  // 요건이 해당되면 불러줘! callback
  console.log(2);
}, 1000);
console.log(3);

//Synchronous callback
function pringImmediately(print) {
  print();
}
pringImmediately(() => console.log("hello"));

//Asynchronous callbsck
function printWidthDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWidthDelay(() => console.log("async callback"), 2000);

//Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "corder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("not access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage("ellie", "dream");
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    user,
      userStorage.getRoles(
        id,
        (userWidthRole) =>
          console.log(
            `Hello ${userWidthRole.name}, your role is ${userWidthRole.role}`
          ),
        () => console.log("error")
      );
  },
  (error) => {
    console.log(error);
  }
);
