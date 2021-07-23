#include <vector>
#include <iostream>

using namespace std;

class Solution
{
public:
    vector<int> smallerNumbersThanCurrent(vector<int> &nums)
    {
        int size = nums.size();
        vector<int> result(size);

        for (int i = 0; i < size; i++)
        {
            result[i] = 0;
            for (int j = 0; j < size; j++)
            {
                if (i == j)
                    continue;
                if (nums[i] > nums[j])
                    result[i]++;
            }
        }

        return result;
    }
};

int main()
{
    Solution test;
    vector<int> testVector = {1, 2, 3, 4, 5};
    vector<int> result = test.smallerNumbersThanCurrent(testVector);
    for (auto it : result)
    {
        cout << it << " ";
    }
    return 0;
}