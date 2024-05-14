
N = int(input())
arr = list(map(int,input().split()))

# 가장 작은 인접한 3개의 면 찾기
minNum = []
neighbor = [[-1], [2, 3, 4, 5], [1, 3, 4, 6], [1, 2, 5, 6], [1, 2, 5, 6], [1, 3, 4, 6], [2, 3, 4, 5]]
min = 100000000
# i로 면 하나 잡고
for i in range(1, 7):
  n1 = arr[i - 1]
  # j, k로 해당 면에서 인접한 면 잡고 최소합 갱신
  for j in range(3):
    for k in range(j + 1, 4):
      # j와 k가 이웃이 아니라면 continue
      if not neighbor[i][k] in neighbor[neighbor[i][j]]: continue
      n2 = arr[neighbor[i][j]-1]
      n3 = arr[neighbor[i][k]-1]
      tmp = n1 + n2 + n3
      if tmp < min:
        min = tmp 
        minNum = [n1, n2, n3]
        
minNum.sort()
if N == 1: res = sum(arr) - max(arr)
else: res = 4*(2*N-3) * (minNum[0] + minNum[1]) + 4 * (sum(minNum)) + (((N - 2) ** 2 + (N - 2)) * 4 + ((N - 2) ** 2)) * (minNum[0]) 
print(res)