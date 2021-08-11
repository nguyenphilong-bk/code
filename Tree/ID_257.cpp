#include <vector>
#include <string>
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
private:
    std::vector<std::string> result;

public:
    Solution()
    {
        this->result = {};
    }
    std::vector<std::string> binaryTreePaths(TreeNode *root)
    {
        binaryTreePathsRecursive(root, "");
        return result;
    }

    void binaryTreePathsRecursive(TreeNode *root, std::string currString)
    {
        if (root)
        {
            currString += std::to_string(root->val) + "->";
            if (!root->left && !root->right)
            {
                result.push_back(currString.substr(0, currString.length() - 2));
            }
            else
            {
                binaryTreePathsRecursive(root->left, currString);
                binaryTreePathsRecursive(root->right, currString);
            }
        }
    }
};

int main()
{
    Solution test;
    TreeNode *root = new TreeNode(1, new TreeNode(2, nullptr, new TreeNode(5)), new TreeNode(3));
    std::vector<std::string> result = test.binaryTreePaths(root);
    for (auto i : result)
    {
        std::cout << i << " ";
    }
}