#include <string>
#include <iostream>

using namespace std;

class Solution
{
public:
    std::string reverseStr(std::string s, int k)
    {
        int size = s.length();
        for (int start = 0; start < size; start += 2 * k)
        {
            int startIndex = start;
            int endIndex = start + k < size ? start + k - 1 : size - 1;
            while (startIndex < endIndex)
            {
                char temp = s[startIndex];
                s[startIndex] = s[endIndex];
                s[endIndex] = temp;
                startIndex++;
                endIndex--;
            }
        }

        return s;
    }
};

int main()
{
    Solution test;
    std::string input = "abcdefg";
    std::cout << test.reverseStr(input, 2);
}