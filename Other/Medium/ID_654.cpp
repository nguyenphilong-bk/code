#include <vector>
#include <iostream>

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
int findMaxIndex(std::vector<int> nums, int left, int right)
{
    for (int i = left; i <= right; i++)
    {
        if (nums[i] > nums[left])
            left = i;
    }

    return left;
}

class Solution
{
public:
    TreeNode *constructMaximumBinaryTree(std::vector<int> &nums)
    {
        return constructMaximumBinaryTreeTemp(nums, 0, nums.size() - 1);
    }

    TreeNode *constructMaximumBinaryTreeTemp(std::vector<int> nums, int left, int right)
    {
        if (left > right)
            return nullptr;

        int indexOfMax = findMaxIndex(nums, left, right);
        TreeNode *root = new TreeNode(nums[indexOfMax]);

        root->left = constructMaximumBinaryTreeTemp(nums, left, indexOfMax - 1);
        root->right = constructMaximumBinaryTreeTemp(nums, indexOfMax + 1, right);

        return root;
    }
};

int main()
{
    Solution test;
    std::vector<int> nums = {3, 2, 1, 6, 0, 5};
    TreeNode *root = test.constructMaximumBinaryTree(nums);
    return 0;
}