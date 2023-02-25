var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lineContentAll = [];

rl.on("line", function (lineContent) {
  lineContentAll.push(lineContent);
});

rl.on("close", function () {
  solve(lineContentAll);
});

function solve(lineContentAll) {
  for (let i = 0; i < lineContentAll.length; i++) {
    var input = lineContentAll[i];
    var inputArray = input.split(" ");
    if (Number(inputArray[0]) === Number(inputArray[1])) {
      if (Number(inputArray[0]) === 0) {
        break;
      } else {
        console.log(inputArray[0]);
      }
    } else if (Number(inputArray[0]) > Number(inputArray[1])) {
      console.log(inputArray[0]);
    } else {
      console.log(inputArray[1]);
    }
  }
}
