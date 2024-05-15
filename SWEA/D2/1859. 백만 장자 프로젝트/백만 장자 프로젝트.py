
res = []
 
T = int(input())
# 가장 큰 인덱스 구해서 그 전까지 있던것들 전부 매도 -> idx로 저장
# idx + 1을 메모해두고 다음엔 거기부터 순회
 
def getMax(arr):
  idx = 0
  _max = 0
  for i in range(len(arr)):
    if _max < arr[i]:
      idx = i
      _max = arr[i]
  return idx, _max

for _ in range(T):
  N = int(input())
  arr = list(map(int,input().split()))
  memo = 0
  idx = 0
  sum = 0
  
  while(memo < N):
 
    idx, _max = getMax(arr[memo:N])
    idx += memo
        
    # idx 이전에 샀던 것들 arr[idx] 값으로 다 팔기
    for i in range(memo, idx):
      sum += _max - arr[i]
 
    memo = idx + 1
  res.append(sum)
 
print("\n".join([f'#{idx + 1} {it}' for idx, it in enumerate(res)]))