#include <queue>
#include <iostream>
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
    int minOfTwoElement(int a, int b)
    {
        return a > b ? b : a;
    }
    int minDepth(TreeNode *root)
    {
        if (!root)
            return 0;

        std::queue<TreeNode *> aQueue;
        int result = 1;

        aQueue.push(root);

        while (!aQueue.empty())
        {
            int size = aQueue.size();
            for (int i = 0; i < size; i++)
            {
                TreeNode *temp = aQueue.front();
                if (!temp->left && !temp->right)
                    return result;
                if (temp->left)
                    aQueue.push(temp->left);

                if (temp->right)
                    aQueue.push(temp->right);

                aQueue.pop();
            }
            result++;
        }

        return result;
    }

    int minDepthRec(TreeNode *root)
    {
        if (!root)
            return 0;
        if (!root->left)
            return 1 + minDepthRec(root->right);
        if (!root->right)
            return 1 + minDepthRec(root->left);

        return 1 + minOfTwoElement(minDepthRec(root->left), minDepthRec(root->right));
    }
};

int main()
{
    Solution aSolution;
    TreeNode *root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    int result = aSolution.minDepthRec(root);
    std::cout << result << std::endl;
}