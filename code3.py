def find_missing_letter(chars):
    for char in chars:
        if ord(char) - ord(prev) > 1:
            return chr(ord(char) - 1)

