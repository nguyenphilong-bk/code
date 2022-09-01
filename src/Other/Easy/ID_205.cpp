#include <string>
#include <unordered_map>
#include <iostream>

class Solution
{
public:
    bool isIsomorphic(std::string str1, std::string str2)
    {
        std::unordered_map<char, char> hashMap1;
        std::unordered_map<char, char> hashMap2;

        for (int i = 0; i < str1.length(); i++)
        {
            if (hashMap1.count(str1[i]) == 0)
                hashMap1.insert(std::make_pair(str1[i], str2[i]));
            else
            {
                if (hashMap1[str1[i]] != str2[i])
                    return false;
            }

            if (hashMap2.count(str2[i]) == 0)
                hashMap2.insert(std::make_pair(str2[i], str1[i]));
            else
            {
                if (hashMap2[str2[i]] != str1[i])
                    return false;
            }
        }

        return true;
    }
};

int main()
{
    Solution test;
    std::string str1 = "foo";
    std::string str2 = "bar";
    test.isIsomorphic(str1, str2);

    return 0;
}
