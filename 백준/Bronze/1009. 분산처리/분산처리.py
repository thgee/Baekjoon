
T = int(input())
res = []
for _ in range(T):
  a, b = map(int,input().split())
  da = a
  for i in range(b - 1):
    a = (a * da) %10

  res.append(a%10) if a%10 != 0 else res.append(10) 

print("\n".join(list(map(str,res))))