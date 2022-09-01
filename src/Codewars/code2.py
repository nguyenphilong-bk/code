from functools import reduce


def high(x: str):
    return max(x.split(' '), key=lambda ele: sum(ord(c) - 96 for c in ele))
