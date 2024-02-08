let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/ |\n/);
let n = Number(input.shift());

// ------------------------------------------------------------------

let deque = [];
let res = [];
for (let i = 0; i < input.length; i++) {
  switch (input[i].trim()) {
    case "pop_front":
      res.push(deque.shift() || -1);
      break;
    case "pop_back":
      res.push(deque.pop() || -1);
      break;
    case "push_front":
      deque.unshift(Number(input[++i]));
      break;
    case "push_back":
      deque.push(Number(input[++i]));
      break;
    case "front":
      res.push(deque.length - 1 !== -1 ? deque[0] : -1);
      break;
    case "back":
      res.push(deque.length - 1 !== -1 ? deque[deque.length - 1] : -1);

      break;
    case "size":
      res.push(deque.length);
      break;
    case "empty":
      res.push(deque.length ? 0 : 1);
      break;
  }
}

console.log(res.join("\n"));
