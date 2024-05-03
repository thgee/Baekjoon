# 문자열에서 각 문자의 개수를 세어 객체로 저장 (사전순으로 저장해둘 것)
# 개수가 짝수라면 그 절반만큼 출력하고 다음 문자로 넘어감
# 개수가 홀수라면 floor(절반)만큼 출력하고 다음 문자로 넘어감
# 한바퀴 돌고 나면 홀수였던 문자를 하나 출력하고 다시 한바퀴 더 출력
# 만약 홀수인 문자가 두개 이상이라면 펠린드롬 불가능

import sys

s = sys.stdin

str = s.readline().rstrip()



# 각 문자의 빈도수를 저장할 딕셔너리 생성
char_count = {}

# 문자열을 순회하면서 각 문자의 빈도수를 증가시킴
for char in str:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1
    

# 사전순 정렬
char_count = dict(sorted(char_count.items()))

res = ""
odd_count = 0

def push_even_char():
  global res
  global odd_count 
  global odd_char

  for k, v in char_count.items():
    # 절반 출력
      res += k * (v // 2)

    # 개수가 홀수라면 해당 문자 저장하고 odd_count 증가
      if v % 2 == 1: 
        odd_char = k
        odd_count += 1
    

push_even_char()
if odd_count != 0: res += odd_char

# 역순으로 다시 정렬
char_count = dict(sorted(char_count.items(),reverse = True))
push_even_char()

print(res if not(odd_count > 2) else "I'm Sorry Hansoo")

