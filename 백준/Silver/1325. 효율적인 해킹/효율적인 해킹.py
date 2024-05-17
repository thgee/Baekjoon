from collections import deque
  
V, E = list(map(int,input().split()))

graph = [[] for _ in range(V + 1)]
for i in range(E):
  e, s = list(map(int,input().split()))
  graph[s].append(e)


def BFS(s):
  cnt = 1
  isVisit = [False for _ in range(V + 1)]
  queue = deque()
  queue.append(s)
  isVisit[s] = True
  while(len(queue)):
    v = queue.popleft()
    for nv in graph[v]:
      if isVisit[nv]: continue
      isVisit[nv] = True
      queue.append(nv)
      cnt += 1
  return cnt

res = {}
for i in range(1, V+1):
    res[i] = BFS(i)
    
resArr = list(res.items())
resArr.sort(key = lambda x: x[1], reverse=True)

pr = []
maxCnt = resArr[0][1]
for num, cnt in resArr:
  if maxCnt == cnt:
    pr.append(num)

print(" ".join(map(str, pr)))