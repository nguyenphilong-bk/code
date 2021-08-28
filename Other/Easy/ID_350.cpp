#include <unordered_map>
#include <vector>

class Solution
{
public:
    std::vector<int> intersect(std::vector<int> &nums1, std::vector<int> &nums2)
    {
        std::unordered_map<int, int> hashMap;
        std::vector<int> result;

        for (int num : nums1)
        {
            if (hashMap.count(num))
                hashMap[num]++;
            else
                hashMap[num] = 1;
        }

        for (int num : nums2)
        {
            if (hashMap[num] > 0)
            {
                result.push_back(num);
                hashMap[num]--;
            }
        }

        return result;
    }
};