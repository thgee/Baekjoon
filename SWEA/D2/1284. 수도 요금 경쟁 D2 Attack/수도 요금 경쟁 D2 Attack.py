
T = int(input())
res = []
for _ in range(T):
  aCost,bBasicCost,bStdWater,bAddCost,useWater = map(int, input().split())

  # a사와 b사의 요금을 계산해보고 작은 것을 res에 append!
  ac = aCost * useWater
  bc =  bBasicCost + bAddCost * (useWater - bStdWater if useWater - bStdWater > 0 else 0)
  res.append(ac if ac < bc else bc)




print("\n".join([f"#{i + 1} {v}" for i, v in enumerate(res)]))
