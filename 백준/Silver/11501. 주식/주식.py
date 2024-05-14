
res = []
 
T = int(input())
# 가장 큰 인덱스 구해서 그 전까지 있던것들 전부 매도 -> idx로 저장
# idx + 1을 메모해두고 다음엔 거기부터 순회

for _ in range(T):
  
  N = int(input())
  sum = 0
  idx = N-1
  arr = list(map(int,input().split()))
  for i in range(N - 1, -1, -1):
    if idx == 0: break
    cur = arr[i]
    for j in range(idx, -1, -1):
      if arr[j] > cur:
        break
      else:
        sum += cur - arr[j]
    idx = j
  res.append(sum)

print("\n".join(map(lambda x : f'{x}',res)))



