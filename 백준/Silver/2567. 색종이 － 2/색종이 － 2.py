from sys import stdin as s
# s = open("input.txt","rt")

N = int(s.readline())
len = 10

arr = list([int(x) for x in s.readline().split(" ")] for i in range(N))

board = [[0 for i in range(101)] for j in range(101)]

for x, y in arr:
    for i in range(len):
      for j in range(len):
        nx, ny = x + i, y + j
        board[nx][ny] = 1


cnt = 0
offset = [[-1, 0], [0, 1], [1, 0], [0, -1]]

# board를 순회하면서 상하좌우에 1이 있으면 카운트
for x in range(101):
  for y in range(101):
    if board[x][y] == 0:
      for dx, dy in offset:
        nx = x + dx
        ny = y + dy
        if nx >= 0 and nx < 101 and ny >= 0 and ny < 101 and board[nx][ny] == 1: cnt += 1

# 도화지의 가장자리에 1이 있는 경우 카운트
for k in range(101):
  if board[k][0] == 1: cnt += 1
  if board[k][100] == 1: cnt += 1 
  if board[0][k] == 1: cnt += 1
  if board[100][k] == 1: cnt += 1 

  

    
print(cnt)
