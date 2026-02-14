N = int(input())
vals = []
for i in range(N):
    x = input()
    rstr = ""
    total = 0
    l, r = 0, 0
    while r < len(x):
        if x[l].isnumeric():
            while x[r].isnumeric() and r + 1 < len(x):
                r += 1
            if r - l > 0:
                total += int(x[l:r])
            else:
                total += int(x[r])
            l = r
        if x[l] == "-":
            while r + 1 < len(x) and x[r+1].isnumeric() :
                r += 1
            if r - l > 1:
                total -= int(x[l+1:r])
            else:
                total -= int(x[r])
            l = r
        if x[r] in "abcdefghijklmopqrstuvwxyz":
            r += 1
            l += 1
            continue
        if x[r] in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            rstr += x[r]
        r += 1
        l += 1
    while rstr[-1].isnumeric():
        rstr = rstr[:-1:]
    vals.append(rstr + str(total))

for val in vals:
    print(val)