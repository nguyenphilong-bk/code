#include <vector>
#include <string>
#include <unordered_map>
#include <iostream>
#include <algorithm>

std::string generateKey(std::string str)
{
    std::sort(str.begin(), str.end());
    return str;
}

class Solution
{
public:
    std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string> &strs)
    {
        std::vector<std::vector<std::string>> result;
        std::unordered_map<std::string, std::vector<std::string>> hashMap;
        for (auto str : strs)
        {
            std::string key = generateKey(str);
            hashMap[key].push_back(str);
        }

        for (auto key : hashMap)
        {
            result.push_back(key.second);
        }

        return result;
    }
};
