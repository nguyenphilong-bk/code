/* Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]. */
#include <stack>

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
    // TODO Recursive
    /* int rangeSumBST(TreeNode *root, int low, int high)
    {
        if (root == nullptr)
            return 0;

        return ((root->val >= low && root->val <= high) ? root->val : 0) + rangeSumBST(root->left, low, high) + rangeSumBST(root->right, low, high);
    } */

    // TODO Iterative
    int rangeSumBST(TreeNode *root, int low, int high)
    {
        std::stack<TreeNode *> aStack;
        int result = 0;
        TreeNode *curr = new TreeNode(root->val, root->left, root->right);

        while (aStack.size() > 0 || curr)
        {
            if (curr != nullptr)
            {
                aStack.push(curr);
                result += (curr->val >= low && curr->val <= high) ? curr->val : 0;
                curr = curr->left;
            }
            else
            {
                curr = aStack.top()->right;
                aStack.pop();
            }
        }

        return result;
    }
};
