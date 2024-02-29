let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
console.log(fs.readFileSync(filePath).toString().trim() + "??!");
