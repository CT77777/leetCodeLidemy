let n = [2, 7, 3, 77, 8, 11, 15, 14, 0, 99];
let maximum;

maximum = n[0];

for (let i = 1; i < n.length; i++) {
  if (maximum < n[i]) {
    maximum = n[i];
  }
}

console.log("Maximum:", maximum);
