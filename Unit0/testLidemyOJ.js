var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lineContentAll = [];

rl.on("line", function (lineContent) {
  console.log("input:", lineContent);
  lineContentAll.push(lineContent);
});

rl.on("close", function () {
  console.log("All inputs done");
  console.log(lineContentAll);
  solve(lineContentAll);
});

function solve(lineContentAll) {
  var Input = lineContentAll[0];
  var splitInput = Input.split(" ");
  console.log(Number(splitInput[0]) + Number(splitInput[1]));
}

// solve(["15 18"]);
