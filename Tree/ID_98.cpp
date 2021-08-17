
/* 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */
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
    bool isValidBST(TreeNode *root)
    {
        if (!root)
            return true;
        if (!root->left && !root->right)
            return true;
        if (root->left && root->val <= maxValue(root->left))
            return false;
        if (root->right && root->val >= minValue(root->right))
            return false;

        return isValidBST(root->left) && isValidBST(root->right);
    }

    int maxValue(TreeNode *root)
    {
        if (!root->right)
            return root->val;

        return maxValue(root->right);
    }

    int minValue(TreeNode *root)
    {
        if (!root->left)
            return root->val;

        return minValue(root->left);
    }
};