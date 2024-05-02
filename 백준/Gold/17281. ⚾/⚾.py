import sys
from itertools import permutations
s = sys.stdin
# s = open("input.txt","rt")

N = int(s.readline()) # 이닝수
arr = list((list(map(int,s.readline().rstrip().split(" ")))for _ in range(N)))

def play_game(order):
  scr = 0
  i = 0
  for l in range(N):
    b1 = b2 = b3 = 0 # 각 베이스
    out = 0
    while(1):
      hit = arr[l][order[i % 9]] # 타자가 공을 쳤다
      i += 1
      if hit == 0: # 아웃
        out += 1
        if out == 3: break # 아웃 3번이면 이닝 종료
      if hit == 1: # 안타
        scr += b3
        b3 = b2
        b2 = b1
        b1 = 1
      if hit == 2: # 2루타
        scr += b3 + b2
        b3 = b1
        b2 = 1
        b1 = 0
      if hit == 3: # 3루타
        scr += b1 + b2 + b3
        b3 = 1
        b2 = b1 = 0
      if hit == 4: # 홈런
        scr += b1 + b2 + b3 + 1        
        b3 = b2 = b1 = 0
        
  return scr

res = -sys.maxsize
for i in list(permutations([i + 1 for i in range(8)], 8)):
  res = max(play_game(list(i)[0:3] + [0] + list(i)[3:]), res)

print(res)

