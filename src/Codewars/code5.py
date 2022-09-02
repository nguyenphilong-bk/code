def make_readable(seconds):
    # Do something
    result = []
    for x in [3600, 60]:
        result.append("{:02d}".format((seconds // x)))
        seconds = seconds % x
    result.append("{:02d}".format((seconds)))
    return ":".join(result)


print(make_readable(0))
# return ":".join([seconds // x for x in [3600, 60]])
