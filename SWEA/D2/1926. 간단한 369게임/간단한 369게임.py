
N = int(input())

res = ""
for i in range(1, N + 1):
  flag = 0
  for j in str(i):
    if j == '3' or j == '6' or j == '9': 
      res += "-"
      flag = 1

  if flag == 0: res += f"{i}"
  res += " "

print(res.rstrip())