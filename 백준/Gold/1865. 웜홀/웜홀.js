let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let TC = arr.shift();

let res = [];

for (let tc = 0, i = 0; tc < TC; tc++) {
  let [V, E, W] = arr[i++];
  let road = arr.slice(i, i + E);
  let wormhole = arr.slice(i + E, i + E + W);
  i += E + W;

  const bellmanford = () => {
    const dist = Array.from({ length: V + 1 }, () => Number.MAX_SAFE_INTEGER);
    for (let j = 0; j <= V; j++) {
      for (let [s, e, w] of road) {
        if (dist[s] + w < dist[e]) {
          dist[e] = dist[s] + w;
          if (j === V) return "YES";
        }
        if (dist[e] + w < dist[s]) {
          dist[s] = dist[e] + w;
          if (j === V) return "YES";
        }
      }
      for (let [s, e, w] of wormhole) {
        w = -w;
        if (dist[s] + w < dist[e]) {
          dist[e] = dist[s] + w;
          if (j === V) return "YES";
        }
      }
    }
    return "NO";
  };

  res.push(bellmanford());
}

console.log(res.join("\n"));
