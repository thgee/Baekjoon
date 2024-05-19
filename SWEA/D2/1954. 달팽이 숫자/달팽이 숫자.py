
T = int(input())

def DFS(x, y, L, i):
  if L <= 0:
    return 
  for j in range(0, L -1):
    res[x][y + j] = i
    i += 1

  for j in range(0, L -1):
    res[x + j][y + L - 1] = i
    i += 1

  for j in range(0, L -1):
    res[x + L - 1][y + L - 1 - j] = i
    i += 1

  for j in range(0, L -1):
    res[x  + L - 1 - j][y] = i
    i += 1

  DFS(x + 1, y + 1, L - 2, i)


for _ in range(T):
  N = int(input())
  res = [[N*N for _ in range(N)] for _ in range(N)]
  DFS(0, 0, N, 1)
  
  print(f'#{_ + 1}')
  for i in range(N):
    print(" ".join(map(str,res[i])))



