#include <vector>

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
    TreeNode *sortedArrayToBST(std::vector<int> &nums)
    {
        if (nums.empty())
            return nullptr;

        if (nums.size() == 1)
            return new TreeNode(nums[0]);

        int left = 0;
        int right = nums.size() - 1;
        int middle = left + (right - left) / 2;

        TreeNode *root = new TreeNode(nums[middle]);
        if (left < middle)
        {
            std::vector<int> leftNums = {nums.begin(),
                                         nums.begin() + middle};
            root->left = sortedArrayToBST(leftNums);
        }
        if (right > middle)
        {
            std::vector<int> rightNums = {nums.begin() + middle + 1,
                                          nums.end()};
            root->right = sortedArrayToBST(rightNums);
        }
        
        return root;
    }
};