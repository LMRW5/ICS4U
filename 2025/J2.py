D = int(input())
E = int(input())

curr = D
for i in range(E):
    mod = input()
    val = int(input())
    if mod == "+":
        curr += val
    else:
        curr -= val 

print(curr)
        