const plusOne = digits => {
    let carry = 1;
    for (let i = digits.length - 1; i > 0; i--)
    {
        if (digits[i] + carry > 9) {
            digits[i] = (digits[i] + carry) % 10;
            carry = 1;
        }
        else
        {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
    }
    if (digits[0] + carry === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    else digits[0] = digits[0] + carry;
    return digits;
}

console.log(plusOne([9]))