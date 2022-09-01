#include <stack>
#include <iostream>
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
    int findSecondMinimumValue(TreeNode *root)
    {
        if (!root)
            return -1;
        if (!root->left)
            return -1;

        int left = root->left->val;
        int right = root->right->val;

        if (left == root->val)
            left = findSecondMinimumValue(root->left);
        if (right == root->val)
            right = findSecondMinimumValue(root->right);

        if (left != -1 && right != -1)
            return left < right ? left : right;

        if (left != -1)
            return left;
        return right;
    }
};

int main()
{
    Solution aSolution;
    TreeNode *root = new TreeNode(2, new TreeNode(2), new TreeNode(2));

    std::cout << aSolution.findSecondMinimumValue(root);
}