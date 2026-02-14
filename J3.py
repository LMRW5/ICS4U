N = int(input())
vals = []
for _ in range(N):
    x = input()
    rstr = ""
    total = 0
    # Capital loop:
    for i in x:
        if i.isupper():
            rstr += i

    # Total number loop
    isneg = False
    l = 0
    r = 0
    while r < len(x):
        if x[r] == "-":
            isneg = True
        if x[l].isnumeric():
            while x[r].isnumeric() and r + 1 < len(x):
                r += 1
            if l - r > 0:
                if isneg:
                    total -= int(x[l:r])
                    print("subtracting" + x[l:r])
                    isneg = False
                else:
                    total += int(x[l:r])
                    print("subtracting" + x[l:r])

                    isneg = False
            else:
                if isneg:
                    total -= int(x[r])
                    print("subtracting" + x[r])
                    isneg = False
                else:
                    total += int(x[r])
                    print("subtracting" + x[r])

                    isneg = False
            l = r
        if x[r] == "-":
            isneg = True
        r += 1
        l += 1

    vals.append(rstr + str(total))

for val in vals:
    print(val)