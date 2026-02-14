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
            r += 1
            continue 
        if r < len(x) and x[r].isnumeric():
            l = r
            while r < len(x) and x[r].isnumeric():
                r += 1
            if isneg:
                total -= int(x[l:r])
                isneg = False
            else:
                total += int(x[l:r])

                isneg = False
            l = r
        else:
            r += 1

    vals.append(rstr + str(total))

for val in vals:
    print(val)