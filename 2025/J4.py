import sys
N = int(input())
a = []
for i in range(N):
    a.append(input())

l = 0
rain = 0
maxconcec = 0
for r in range(len(a)):
    if a[r] == "P":
        rain += 1
        
    while rain > 1:
        if a[l] == "P":
            rain -= 1
        l += 1

    maxconcec = max(maxconcec, r-l + 1)

if "P" not in a:
    maxconcec -= 1
print(maxconcec)
