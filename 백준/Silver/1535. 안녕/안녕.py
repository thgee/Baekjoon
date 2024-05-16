N = int(input())

heart = list(map(int,input().split()))
joy = list(map(int,input().split()))

dp = [0] * 100

# dp의 뒤에서부터 접근
for i in range(N):
  for j in range(99, heart[i] - 1, -1):
    dp[j] = max(dp[j], dp[j - heart[i]] + joy[i])


print(dp[99])