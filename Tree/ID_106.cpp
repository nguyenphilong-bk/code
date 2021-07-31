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
    TreeNode *buildTree(std::vector<int> &inorder, std::vector<int> &postorder)
    {
        if (inorder.size() == 0)
            return nullptr;
        std::vector<int> inLeft;
        std::vector<int> postLeft;
        std::vector<int> inRight;
        std::vector<int> postRight;

        TreeNode *root = new TreeNode(postorder[postorder.size() - 1]);
        for (int i = 0; i < inorder.size(); i++)
        {
            if (inorder[i] == root->val)
            {
                inRight.assign(inorder.begin() + i + 1, inorder.end());
                postRight.assign(postorder.begin() + i, postorder.end() - 1);
                break;
            }
            inLeft.push_back(inorder[i]);
            postLeft.push_back(postorder[i]);
        }
        root->left = buildTree(inLeft, postLeft);
        root->right = buildTree(inRight, postRight);
        return root;
    }
};