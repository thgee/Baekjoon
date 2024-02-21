let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("");

let res = [];
for (let i = "a".charCodeAt(); String.fromCharCode(i) <= "z"; i++) {
  res.push(arr.indexOf(String.fromCharCode(i)));
}

console.log(res.join(" "));
