#include <vector>

using namespace std;

// stupid
int solve(vector<int> &nums, int k, int target)
{
    int first = 0;
    int second = k - 1;
    int tempSum = target * k;
    int result = 0;

    for (int i = second; i < nums.size(); i++)
    {
        int sum = 0;
        for (int j = first; j < second; j++)
            sum += nums[j];

        if (sum >= tempSum)
            result++;

        first++;
        second++;
    }

    return result;
}