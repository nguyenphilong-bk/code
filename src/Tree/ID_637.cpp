#include <vector>
#include <queue>

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
    std::vector<double> average;

public:
    std::vector<double> averageOfLevels(TreeNode *root)
    {
        std::queue<TreeNode *> queue;
        queue.push(root);
        while (!queue.empty())
        {
            int size = queue.size();
            double sum = 0;
            for (int i = 0; i < size; i++)
            {
                TreeNode *outNode = queue.front();
                queue.pop();
                if (outNode->left)
                    queue.push(outNode->left);
                if (outNode->right)
                    queue.push(outNode->right);

                sum += outNode->val;
            }
            this->average.push_back(sum / size);
        }

        return this->average;
    }
};