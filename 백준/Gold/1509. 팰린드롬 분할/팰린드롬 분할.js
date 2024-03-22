const { time } = require("console");
const { subscribe } = require("diagnostics_channel");
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = arr.length;

const isPalindrome = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

for (let i = 0; i < arr.length; i++) {
  // 원소 하나짜리 부분수열 팰린드롬 처리
  isPalindrome[i][i] = true;
  // 원소 두개짜리 펠린드롬 처리
  if (i < arr.length - 1 && arr[i] === arr[i + 1])
    isPalindrome[i][i + 1] = true;
}

// 2차원 배열인 dp를 마지막 줄 부터 역방향으로 갱신 (dp 배열을 그려보면 왜 역방향인지 이해가 갈 것이다)
for (let i = N - 1 - 2; i >= 0; i--) {
  for (let j = i + 2; j <= N - 1; j++) {
    if (arr[i] === arr[j] && isPalindrome[i + 1][j - 1])
      isPalindrome[i][j] = true;
  }
}

// 문자열에서 해당 인덱스까지 잘라서 펠린드롬으로 분할하였을 때, 그 개수의 최솟값을 저장할 배열
const minPalCnt = Array.from({ length: N + 1 }, (_, i) => i); // 문자 하나하나 잘랐을 때는 무조건 펠린드롬이므로 인덱스로 펠린드롬 분할 개수를 초기화

minPalCnt[0] = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    // isPalindrome 배열은 0부터 시작하고 minPalCnt은 1부터 시작한다.
    // 왜냐하면 minPalCnt[0]를 0으로 초기화하고 그것을 사용해야 하기 떼문
    // isPalindrome은 별 이유 없음
    if (isPalindrome[j - 1][i - 1]) {
      minPalCnt[i] = Math.min(minPalCnt[i], minPalCnt[j - 1] + 1);
    }
  }
}

console.log(minPalCnt[N]);
