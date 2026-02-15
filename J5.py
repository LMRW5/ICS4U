import collections
def generategrid(R: int, C: int, V: int):
    graph = []
    curr = 1
    for _ in range(R):
        row = []
        for _ in range(C):
            if curr == 1 + V:
                curr = 1
            row.append(curr)
            curr += 1
        graph.append(row)
    return graph

def dfs(grid: [], x:int, y:int):
    moves = [[0,1], [1,1], [-1,1]]
    prices = []
    q = collections.deque([])
    q.append((x,y,grid[y][x]))
    while q:
        val = q.pop()
        newx = val[0]
        newy = val[1]
        cost = val[2]
        for dx, dy in moves:
            betterx = dx + newx
            bettery = newy + dy
            if -1 < betterx < len(grid[0]) and -1 < bettery < len(grid) - 1:
                q.append((betterx, bettery, cost + grid[bettery][betterx]))
            elif -1 < betterx < len(grid[0]) and bettery == len(grid) - 1:
                prices.append(cost + grid[bettery][betterx])
    
    return min(prices)

R = int(input())
C = int(input())
M = int(input())
grid = generategrid(R, C, M)
mincost = float('inf')
for i in range(len(grid[0])):
    mincost = min(dfs(grid, i, 0), mincost)

print(mincost)