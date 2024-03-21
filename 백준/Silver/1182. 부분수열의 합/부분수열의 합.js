  let fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((it) => it.split(" ").map((it) => Number(it)));
  let [N, S] = input.shift();
  let arr = input.shift();

  let res = 0;
  const DFS = (cur, sum) => {
    // if (sum > S) return;
    if (sum === S) {
      // console.log(cur);
      res++;
    }

    for (let i = cur + 1; i < N; i++) {
      DFS(i, sum + arr[i]);
    }
  };

  DFS(-1, 0);

  if (S === 0) res--; // 공집합 제거
  console.log(res);
