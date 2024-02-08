let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/ |\n/);
let n = Number(input.shift());

// ------------------------------------------------------------------

let queue = [];
let res = [];
for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "pop":
      res.push(queue.shift() || -1);
      break;
    case "push":
      queue.push(Number(input[++i]));
      break;
    case "front":
      res.push(queue.length - 1 !== -1 ? queue[0] : -1);

      break;
    case "back":
      res.push(queue.length - 1 !== -1 ? queue[queue.length - 1] : -1);

      break;
    case "size":
      res.push(queue.length);
      break;
    case "empty":
      res.push(queue.length ? 0 : 1);
      break;
  }
}

console.log(res.join("\n"));
