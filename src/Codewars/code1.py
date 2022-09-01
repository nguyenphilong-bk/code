def longest_consec(strarr, k):
    # your code
    result = ""
    length = len(strarr)

    if k < length and k > 0:
        for i in range(length - k + 1):
            temp = ''.join(strarr[i: i+k])
            result = temp if len(temp) > len(result) else result

    return result


print(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
