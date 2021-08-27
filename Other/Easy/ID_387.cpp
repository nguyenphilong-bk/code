#include <unordered_map>
#include <string>
#include <iostream>

class Solution
{
public:
    int firstUnique(const std::string &str)
    {
        std::unordered_map<char, int> hashMap;

        for (const char &it : str)
        {
            if (hashMap.count(it))
                hashMap[it]++;
            else
                hashMap[it] = 1;
        }

        for (int i = 0; i < str.length(); i++)
        {
            if (hashMap[str[i]] == 1)
                return i;
        }

        return -1;
    }
};

int main()
{
    Solution test;
    std::string str = "leetcode";
    std::cout << test.firstUnique(str);
}