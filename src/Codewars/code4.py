
def rgb(r, g, b):
    return "".join(["{:02X}".format(min(max(x, 0), 255)) for x in [r, g, b]])
print(rgb(255,255,255))