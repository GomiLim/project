"use strict";

//3. Default parameters (added in ES6)

function showMessage(message, form = "unknown") {
  // ='unknown'이렇게 적어주면, 기본값 설정이 가능합니다.
  console.log(`${message} by ${from}`);
}

function printAll(...args) {
  // ...args 같이 받아오면, 파라미터를 배열로 받아올 수 있습니다.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // for of 문도 가능합니다.
  // for (const arg of args) {
  //   console.log(arg);
  // }
}

printAll("dream", "coding", "ellie");
