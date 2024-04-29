import sys
N = 19
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]


def solution():
  global winner
  winner = 0
  global res_pos
  offset = [[0, 1], [1, 1], [1, 0], [-1, 1]]  

  for x in range(N):
    for y in range(N):
      cur_stone = arr[x][y]
      if cur_stone != 0:
        for dx, dy in offset:
          cnt = 1
          if not (x - dx < 0 or x - dx >= N or y - dy < 0 or y - dy >= N) and arr[x - dx][y - dy] == cur_stone: continue
          nx, ny = x, y 
          while(1):
            nx += dx
            ny += dy

            # 5목인 경우 6목 체크 후 종료
            if cnt == 5: 
              flag = 0
              if nx < 0 or nx >= N or ny < 0 or ny >= N: flag = 1
              elif arr[nx][ny] != cur_stone: flag = 1
              if flag == 1:
                winner = cur_stone
                res_pos = [x, y]
                return

            if nx < 0 or nx >= N or ny < 0 or ny >= N: break
            if arr[nx][ny] != cur_stone: break
            cnt += 1
            



solution()
print(winner)
if winner: print( res_pos[0]+1, res_pos[1]+1)





