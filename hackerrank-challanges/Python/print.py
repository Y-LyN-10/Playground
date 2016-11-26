# [print(x, end="") for x in range(1, int(input()) + 1)]
list(map(lambda x:print(x, end = ""), (x for x in range(1, int(input()) + 1))))
