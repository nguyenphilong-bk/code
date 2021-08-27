#include <unordered_set>
#include <unordered_map>
#include <vector>
#include <string>

class Solution
{
public:
    std::vector<std::string> findRestaurant(std::vector<std::string> list1, std::vector<std::string> list2)
    {
        std::unordered_map<std::string, int> hashMap;
        std::vector<std::string> result;
        int minSum = INT32_MAX, newSum = 0;
        
        for (int i = 0; i < list1.size(); ++i)
            hashMap[list1[i]] = i;

        for (int i = 0; i < list2.size(); i++)
        {
            if (hashMap.count(list2[i]))
            {
                newSum = hashMap[list2[i]] + i;
                if (newSum < minSum)
                {
                    result.clear();
                    result.push_back(list2[i]);
                    minSum = newSum;
                }
                else if (newSum == minSum)
                {
                    result.push_back(list2[i]);
                }
            }
        }

        return result;
    }
};