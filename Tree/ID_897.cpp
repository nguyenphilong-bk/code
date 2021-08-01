#include <stack>
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
    TreeNode *increasingBST(TreeNode *root)
    {
        std::vector<TreeNode *> inOrder = inOrderTraversal(root);
        for (int i = 0; i < inOrder.size() - 1; i++)
        {
            inOrder[i]->left = nullptr;
            inOrder[i]->right = inOrder[i + 1];
        }
        inOrder[inOrder.size() - 1]->left = nullptr;
        inOrder[inOrder.size() - 1]->right = nullptr;

        return inOrder[0];
    }

    std::vector<TreeNode *> inOrderTraversal(TreeNode *root)
    {
        std::stack<TreeNode *> aStack;
        std::vector<TreeNode *> result;

        while (aStack.size() > 0 || root)
        {
            if (root)
            {
                aStack.push(root);
                root = root->left;
            }
            else
            {
                root = aStack.top()->right;
                result.push_back(aStack.top());
                aStack.pop();
            }
        }
        return result;
    }
};

int main()
{
    Solution aSolution;
    // TreeNode *root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1), nullptr), new TreeNode(4)), new TreeNode(6, nullptr, new TreeNode(8, new TreeNode(7), new TreeNode(9))));
    TreeNode *root = new TreeNode(2, new TreeNode(1), new TreeNode(4, new TreeNode(3), nullptr));
    TreeNode *response = aSolution.increasingBST(root);
    return 0;
}