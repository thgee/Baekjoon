
T = int(input())

res = []
for _ in range(T):
  N, M = (map(int, input().split()))
  board = []
  for _ in range(N):
    board.append(list(map(int, input().split())) )
  #################################
  maxCnt = 0
  for x in range(N - M + 1):
    for y in range(N - M + 1):
      sumCnt = 0
      for i in range(x, x + M):
        for j in range(y, y + M):
          sumCnt += board[i][j]

      maxCnt = max(maxCnt, sumCnt)

  res.append(maxCnt)


print("\n".join([f"#{i + 1} {v}" for i, v in enumerate(res)]))

