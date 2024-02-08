let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let [A, B, V] = input;
V = Number(V);
A = Number(A);
B = Number(B);
// ------------------------------------------------------------------

V -= A;
console.log(Math.ceil(V / (A - B)) + 1);
