N = int(input())
chairs = []
seen = 0
for _ in range(N):
    chairs.append(int(input()))

for i in range(int(N/2)):
    if chairs[i] == chairs[i + int(N/2)]:
        seen += 2

print(seen)