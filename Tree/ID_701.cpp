/* 
Constraints:

The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.
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
    // Recursive solution
    TreeNode *insertIntoBST(TreeNode *root, int val)
    {
        if (!root)
            return new TreeNode(val);

        if (val < root->val)
        {
            if (!root->left)
            {
                root->left = new TreeNode(val);
                return root;
            }
            root->left = insertIntoBST(root->left, val);
        }
        else
        {
            if (!root->right)
            {
                root->right = new TreeNode(val);
                return root;
            }
            root->right = insertIntoBST(root->right, val);
        }

        return root;
    }

    // Iterative solution
    TreeNode *insertIntoBSTIterative(TreeNode *root, int val)
    {
        if (!root)
            return new TreeNode(val);

        TreeNode *curr = root;
        while (curr)
        {
            if (curr->val < val)
            {
                if (curr->right)
                    curr = curr->right;
                else
                {
                    curr->right = new TreeNode(val);
                    return root;
                }
            }
            else
            {
                if (curr->left)
                    curr = curr->left;
                else
                {
                    curr->left = new TreeNode(val);
                    return root;
                }
            }
        }

        return root;
    }
};

int main()
{
    Solution test;
    TreeNode *root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
    TreeNode *result = test.insertIntoBSTIterative(root, 5);
    return 0;
}