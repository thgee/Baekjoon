let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(arr.shift());

const calcDist = (set) => {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    let cnt = {};
    for (let x of set) {
      cnt[x[i]] = (cnt[x[i]] || 0) + 1;
    }
    sum += (Object.values(cnt)[0] || 0) * (Object.values(cnt)[1] || 0);
  }
  return sum;
};

let res = [];
for (let t = 0; t < T; t++) {
  let n = Number(arr[t * 2]);
  let mbti = arr[t * 2 + 1].trim().split(" ");
  if (n > 32) {
    res.push(0);

    continue;
  }

  let min = 1000;
  const DFS = (mbti, l, set, prev) => {
    if (l === 3) {
      min = Math.min(min, calcDist(set));
      return;
    }
    for (let i = prev + 1; i < mbti.length; i++) {
      set.push(mbti[i]);
      DFS(mbti, l + 1, set, i);
      set.pop();
    }
  };

  DFS(mbti, 0, [], -1);

  res.push(min);
}

console.log(res.join("\n"));
