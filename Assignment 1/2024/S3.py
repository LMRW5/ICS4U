def swipeLeft(arr: list, change: list):
    lval = change[0]
    rval = change[1]
    ptr = lval 
    while ptr <= rval:
        arr[ptr] = rval
        ptr += 1
    return arr
def swipeRight(arr: list, change: list):
    lval = change[0]
    rval = change[1]
    ptr = lval 
    while ptr <= rval:
        arr[ptr] = lval
        ptr += 1
    return arr

print(swipeLeft([0,1,2,3,4,5], [3,5]))
print(swipeRight([0,1,2,3,4,5], [2,4]))

