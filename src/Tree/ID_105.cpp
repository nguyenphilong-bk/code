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

class Solution
{
public:
    TreeNode *buildTree(std::vector<int> &preorder, std::vector<int> &inorder)
    {
        if (inorder.size() == 0)
            return nullptr;

        TreeNode *result = new TreeNode(preorder[0]);
        std::vector<int> preVector;
        std::vector<int> inorderVector;
        std::vector<int> preRight;
        std::vector<int> inRight;
        for (int i = 0; i < inorder.size(); i++)
        {
            if (inorder[i] == result->val)
            {
                preRight.assign(preorder.begin() + i + 1, preorder.end());
                inRight.assign(inorder.begin() + i + 1, inorder.end());
                break;
            }
            inorderVector.push_back(inorder[i]);
        }
        for (int i = 0; i < inorderVector.size(); i++)
        {
            preVector.push_back(preorder[i + 1]);
        }
        result->left = buildTree(preVector, inorderVector);
        result->right = buildTree(preRight, inRight);
        return result;
    }
};
void preorderTraversal(TreeNode *root)
{
    if (!root)
        return;
    std::cout << root->val;
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

int main()
{
    Solution aSolution;
    std::vector<int> preorder = {3, 9, 20, 15, 7};
    std::vector<int> inorder = {9, 3, 15, 20, 7};

    TreeNode *result = aSolution.buildTree(preorder, inorder);

    preorderTraversal(result);
}