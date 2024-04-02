let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) =>
    it
      .trim()
      .split(" ")
      .map((it) => Number(it))
  );

let TC = arr.shift();

let res = [];
for (let t = 0, i = 0; t < TC; t++) {
  let [N, M] = arr[i++];
  i += M;
  res.push(N - 1);
}

console.log(res.join("\n"));
