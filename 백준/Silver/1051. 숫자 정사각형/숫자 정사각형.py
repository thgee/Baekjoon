# 제출 시 주석처리
#import sys
#sys.stdin = open("input.txt", "r")


# 각 줄의 숫자를 하나씩 순회하면서 해당 숫자랑 같은 숫자가 나올때를 찾음
# 같은 숫자가 나온 순간 그 변의 길이가 최댓값을 갱신할 수 있는지 확인
# 갱신할 수 있다면 변의 길이만큼 x축으로도 내려가서 해당 숫자가 각 꼭짓점에 존재하는지 확인해보기
# 존재한다면 그 정사각형이 가장 큰 정사각형이 되므로 max크기를 갱신

N, M = map(int, input().split())

arr = []
maxLen = 1

for x in range(N):
  arr.append(list(map(int, input())))


for x in range(N):
  for y in range(M):
    pivot = arr[x][y]
    for k in range(y + 1, M):
      curLen =  k - y + 1
      # 정사각형을 이룬다면
      if x + curLen - 1 > N - 1: continue
      if pivot == arr[x][k] and pivot == arr[x + curLen - 1][y] and pivot == arr[x + curLen - 1][k]:
        maxLen = max(curLen, maxLen)
            

print(maxLen ** 2)