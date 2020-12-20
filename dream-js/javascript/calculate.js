function calculate(command, a, b) {
  if (command === "add") return console.log(a + b);
  if (command === substract) return (result = a - b);
  if (command === divide) return (result = a / b);
  if (command === multiply) return (result = a * b);
}

calculate("add", 3, 6);

function calculate(command, a, b) {
  switch (command) {
    case "add":
      console.log(a + b);
      break;
    case "substract":
      console.log(a - b);
      break;
    case "divide":
      console.log(a / b);
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "remainder":
      console.log(a % b);
      break;
    default:
      throw Error("unknow error");
  }
}
console.log(calculate("remaiddnder", 3, 5));
