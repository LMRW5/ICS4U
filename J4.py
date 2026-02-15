N = int(input())
a = []
for i in range(N):
    a.append(input())

l = 0
rain = False
maxconcec = 0
for r in range(len(a)):
    if a[r] == "P":
        if rain == True:
            while a[l] != "P":
                l += 1
            l += 1
        else:
            rain = True
    maxconcec = max(maxconcec, r-l + 1)

print(maxconcec)
