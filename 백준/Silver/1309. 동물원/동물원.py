
N = int(input())
dp = [0] * (N + 10)
dp[1] = 3
dp[2] = 7

for i in range(3, N + 1):
  dp[i] = (dp[i - 2] + 2 * dp[i - 1]) % 9901


print(dp[N])
