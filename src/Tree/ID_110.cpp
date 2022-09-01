#include <cmath>

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
    bool isBalanced(TreeNode *root)
    {
        if (!root)
            return true;

        return isBalanced(root->left) && isBalanced(root->right) && (abs(getHeight(root->left) - getHeight(root->right))) <= 1;
    }

    int getHeight(TreeNode *root)
    {
        if (!root)
            return 0;

        int rightHeight = getHeight(root->right);
        int leftHeight = getHeight(root->left);
        return leftHeight >= rightHeight ? leftHeight + 1 : rightHeight + 1;
    }
};