import sys

# sys.stdin = open("input.txt","rt")

res = []
N = int(input())
for i in range(N):

  L = list(map(int, input().split()))
  # 각 땅의 병사의 수
  M = L.pop(0)

  # stdCnt 보다 크면 해당 병사의 땅이 됨
  stdCnt = (M // 2)
  # 점령한 병사가 둘 이상이면 who가 -1이 됨
  who = -1


  # 병사 수 세기
  cnt = {}
  for j in range(M):
    if L[j] in cnt: cnt[L[j]] += 1
    else: cnt[L[j]] = 1

  

  for i, v in cnt.items():

    # 병사의 수가 절반이 넘으면서 이미 점령한 병사가 없던 경우
    if stdCnt < v and who == -1: 
      who = i

    # 병사의 수가 절반이 넘는데 이미 점령한 병사가 있던 경우
    elif stdCnt < v:
      who = -1

  res.append(who if who != -1 else "SYJKGW")  


print(("\n".join(map(str, res))))