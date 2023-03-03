let n = [2, 7, 3, 77, 8, 11, 15, 14, 0];
let minimum;

minimum = n[0];

for (let i = 1; i < n.length; i++) {
  if (minimum > n[i]) {
    minimum = n[i];
  }
}

console.log("Minimum:", minimum);
