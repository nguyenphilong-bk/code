#include <unordered_set>
#include <vector>

class Solution
{
public:
    bool containsDuplicate(std::vector<int> &arr);
};

bool Solution::containsDuplicate(std::vector<int> &arr)
{
    std::unordered_set<int> set;

    for (auto element : arr)
    {
        if (set.count(element) > 0)
            return true;
        set.insert(element);
    }

    return false;
}