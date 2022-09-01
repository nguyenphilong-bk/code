#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> getConcatenation(vector<int> &nums)
    {
        int length = nums.size();
        vector<int> ans(2 * length);

        for (int i = 0; i < nums.size(); i++)
        {
            ans[i] = nums[i];
            ans[i + length] = nums[i];
        }

        return ans;
    }
};