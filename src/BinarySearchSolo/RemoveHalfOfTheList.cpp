#include <unordered_map>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int solve(vector<int> &nums)
{
    unordered_map<int, int> hashMap;
    vector<int> temp;

    int half = floor(nums.size() / 2);
    for (int num : nums)
    {
        if (hashMap.count(num) == 0)
            hashMap[num] = 1;
        else
            hashMap[num]++;
    }

    for (auto item : hashMap)
        temp.push_back(item.second);

    sort(temp.begin(), temp.end());
    int sum = 0;
    int count = 0;
    for (int i = temp.size() - 1; i >= 0; i--)
    {
        sum += temp[i];
        count++;
        if (sum > half)
            return count;
    }

    return 0;
}