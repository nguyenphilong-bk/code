#include <vector>
#include <stack>
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
    bool leafSimilar(TreeNode *root1, TreeNode *root2)
    {
        std::vector<int> result1;
        result1 = leavesValue(root1, result1);
        std::vector<int> result2;
        result2 = leavesValue(root2, result2);

        return result1 == result2;
    }

    std::vector<int> leavesValue(TreeNode *root, std::vector<int> &result)
    {
        if (!root)
            return result;
        if (!root->left && !root->right)
        {
            result.push_back(root->val);
            return result;
        }

        leavesValue(root->left, result);
        leavesValue(root->right, result);

        return result;
    }
};

int main()
{
    Solution test;
    TreeNode *root1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8)));
    TreeNode *root2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))));
    return test.leafSimilar(root1, root2);
}