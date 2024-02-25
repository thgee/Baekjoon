let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, m] = arr.map((it) => Number(it));

let minute = n * 60 + m;
let wakeUpMin = minute - 45;
if (wakeUpMin < 0) wakeUpMin += 1440;

let hour = wakeUpMin / 60;
console.log(`${parseInt(wakeUpMin / 60)} ${wakeUpMin % 60}`);
