import sys
#sys.stdin = open("input.txt","rt")

N, M = map(int ,input().split())


# 패키지와 낱개를 따로따로 배열로 만든다
# 각각 오름차순 정렬하고 가장 싼 패키지값과 낱개값을 저장
# 아래 3가지 경우를 비교한다
  # 패키지로 최대한 사고, 남은 줄을 낱개로 산다
  # 싹 다 낱개로 산다
  # 싹 다 패키지로 산다


pack, each = [],[]
for i in range(M):
  L = list(map(int,input().split()))
  pack.append(L[0])
  each.append(L[1])


pack, each = min(pack), min(each)


cost  = [0 for i in range(3)]

# 패키지로 다 사는 경우, 패키지 + 낱개
_N = N
while(_N >= 6):
  cost[0] += pack
  cost[1] += pack
  _N -= 6

cost[0] += pack
cost[1] += _N * each

# 낱개로 다 사는 경우
cost[2] = N * each



print(min(cost))
