let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));
arr = arr.map((it) => it.trim());

let map = new Map();

let words = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length < M) continue; // 길이가 M 이상인 단어만 외우기
  words.push(arr[i]);
  map.set(arr[i], (map.get(arr[i]) || 0) + 1); // 단어 중복 개수 카운트
}

words.sort((n, p) => {
  if (map.get(n) !== map.get(p)) return map.get(p) - map.get(n);
  else if (n.length !== p.length) return p.length - n.length;
  else return n < p ? -1 : 1;
});

let set = new Set(words);
console.log(Array.from(set).join("\n"));
