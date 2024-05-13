N = int(input())
arr = [list(input().rstrip()) for _ in range(N)]

def a():

  # N = int(input())
  # arr = [list(input().rstrip()) for _ in range(N)]
  isVisit = [[0 for _ in range(N)] for _ in range(N)]
  friends = [0 for i in range(N)]

  for i in range(N):
    isVisit[i][i] = 1
    arr[i][i] = 'Y'


# 3->2->4 반영안됨
  for i in range(N):
    for j in range(N):
      # if i == 2: print(i, j, isVisit, friends[i])
      if arr[i][j] == 'Y':
        
        # if i == 2 and j == 1: print(isVisit[2])
        for k in range(N):
          if arr[j][k] == 'Y': 
            if isVisit[i][k]: continue
            isVisit[i][k] = 1
            friends[i] += 1


  print(max(friends))

def b():
  n = N 
  input = arr

  graph = [[] for _ in range(n)]
  for i in range(n):
      for j in range(n):
          if input[i][j] == 'Y':
              graph[i].append(j)

  friend_count = [0] * (n)
  for i in range(n):
      friend = set()
      for j in graph[i]:
          friend.add(j)
          for k in graph[j]:
              friend.add(k)
      if len(friend) == 0:
          friend_count[i] = 0
      else:
          friend_count[i] = len(friend)-1
  print((friend_count))
  print(max(friend_count))

a()