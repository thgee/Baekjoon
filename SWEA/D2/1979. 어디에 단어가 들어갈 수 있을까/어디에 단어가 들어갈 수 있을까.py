
        
def go_word(cnt, arr, level, x, y):
    tx, ty = x, y
    for dx, dy in offset: #  방향 잡고
          x, y = tx, ty
          if (x - dx < 0 or y - dy < 0) or (x - dx >= 0 and y - dy >= 0 and arr[x - dx][y - dy] == 0):
            for i in range(level): # level만큼 가보기
                nx = x + dx
                ny = y + dy

                # 마지막 칸 체크
                if level - 1 == i:
                    if  nx >= N or ny >= N:
                        cnt+=1
                        break
                    
                    elif arr[nx][ny] == 0:
                        cnt+=1
                        break
                    
                # 마지막칸이 아닌 경우
                else:
                    # 끝에 도달하면 종료
                    if  nx >= N or ny >= N: break

                    # 1을 찾으면 (길이 있으면)
                    if arr[nx][ny] == 1 :
                        x = nx
                        y = ny
                    else: break
    return cnt
    
T = int(input())
offset = [[1, 0], [0, 1]]

for _ in range(T):
    cnt = 0
    arr = []
    N, K = list(map(int, input() .split()))
    for i in range(N):
        arr.append(list(map(int,input() .split())))
    
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:
                cnt = go_word(cnt, arr,K,i, j)
    print(f"#{_ + 1} {cnt}")

