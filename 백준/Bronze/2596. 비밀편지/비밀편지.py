import sys
N, arr = [sys.stdin.readline().rstrip() for _ in range(2)]
N = int(N)

promise = [
	['A', "000000"],
	['B', "001111"],
	['C', "010011"],
	['D', "011100"],
	['E', "100110"],
	['F', "101001"],
	['G', "110101"],
	['H', "111010"]
]

def get_char(str):
	for ch, pw in promise:
		cnt = 0
		for i in range(6):
			if pw[i] == str[i]: cnt += 1

		# 문자를 찾으면
		if cnt >= 5: 
			return ch

	# 문자를 못 찾으면
	return -1

res = ""
for i in range(0, len(arr), 6):
	str = arr[i:i+6]
	ch = get_char(str)
	if ch != -1: res += ch
	else: 
		res = (i + 6) // 6
		break

print(res)
