N, M = map(int,input().split())

len = N if N < M else M

if N <= M: print(len * 2 - 2)
else:print(len * 2 - 1)
    
