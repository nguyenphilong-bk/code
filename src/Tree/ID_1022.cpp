#include <iostream>
#include <stack>
#include <utility>

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
private:
    int result = 0;

public:
    int sumRootToLeaf(TreeNode *root)
    {
        sumRootToLeftRec(root, 0);
        return this->result;
    }

    void sumRootToLeftRec(TreeNode *root, int currValue)
    {
        if (root)
        {
            currValue = (currValue << 1) | root->val;
            if (!root->left && !root->right)
                result += currValue;
            else
            {
                this->sumRootToLeftRec(root->left, currValue);
                this->sumRootToLeftRec(root->right, currValue);
            }
        }
    }
};

int main()
{
    TreeNode *root = new TreeNode(1, new TreeNode(0, new TreeNode(0), new TreeNode(1)), new TreeNode(1, new TreeNode(0), new TreeNode(1)));
    Solution test;
    std::cout << test.sumRootToLeaf(root) << std::endl;
}