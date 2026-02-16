import collections
X = input().split(" ")


T = int(X[0])
N = int(X[1])

words = []
tf = []
for _ in range(T):
    words.append(input())

for word in words:
    tracker = True
    ctr = collections.Counter(word)
    hl = {}
    for val in ctr:
        if ctr[val] > 1:
            hl[val] = "H"
        else:
            hl[val] = "L"
    odds = word[::2]
    curr1 = hl[odds[0]]
    for i in odds:
        if hl[i] != curr1:
            tracker = False
            break

    evens = word[1::2]
    curr2 = hl[evens[0]]
    for i in evens:
        if hl[i] != curr2:
            tracker = False
            break
    if curr2 == curr1:
        tracker = False
    
    tf.append(tracker)

for x in tf:
    if x:
        print("T")
    else:
        print("F")