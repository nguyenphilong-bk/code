#include <unordered_set>
#include <vector>

class Solution
{
public:
    int singleNumber(std::vector<int> &nums);
};

int Solution::singleNumber(std::vector<int> &nums)
{
    std::unordered_set<int> set;

    for (int num : nums)
    {
        if (set.count(num) > 0)
            set.erase(num);
        else
            set.insert(num);
    }

    return *set.begin();
}