/* 
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
 */
class Solution
{
public:
    bool isPowerOfThree(int number)
    {
        if (number == 1)
            return true;
        if (number == 0 || number % 3 != 0)
            return false;

        return isPowerOfThree(number / 3);
    }
};