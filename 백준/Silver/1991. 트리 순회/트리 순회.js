let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let V = Number(arr.shift()[0]);
arr = arr.map((it) => it.split(" ").map((it) => it.trim()));

const tree = new Map();

for (let [p, c1, c2] of arr) {
  tree.set(p, [c1, c2]);
}

let preRes = [];
let inRes = [];
let postRes = [];

const preOrder = (v) => {
  let [left, right] = tree.get(v);
  preRes.push(v);
  if (left !== ".") preOrder(left);
  if (right !== ".") preOrder(right);
};

const inOrder = (v) => {
  let [left, right] = tree.get(v);
  if (left !== ".") inOrder(left);
  inRes.push(v);
  if (right !== ".") inOrder(right);
};

const postOrder = (v) => {
  let [left, right] = tree.get(v);
  if (left !== ".") postOrder(left);
  if (right !== ".") postOrder(right);
  postRes.push(v);
};

preOrder("A");
inOrder("A");
postOrder("A");

console.log(preRes.join(""));
console.log(inRes.join(""));
console.log(postRes.join(""));
