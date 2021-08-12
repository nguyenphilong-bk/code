
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

#include <stack>
#include <vector>

class Solution
{
public:
    bool findTarget(TreeNode *root, int k)
    {
        std::vector<int> inOrder;
        inOrder = inOrderTraversal(root, inOrder);

        int end = inOrder.size() - 1;
        for (int start = 0; start < end;)
        {
            int sum = inOrder[start] + inOrder[end];
            if (sum == k)
                return true;
            else if (sum < k)
            {
                start++;
            }
            else
            {
                end--;
            }
        }

        return false;
    }

    std::vector<int> inOrderTraversal(TreeNode *root, std::vector<int> inOrder)
    {
        if (!root)
            return inOrder;

        std::stack<TreeNode *> stack;
        while (!stack.empty() || root)
        {
            if (root)
            {
                stack.push(root);
                root = root->left;
            }
            else
            {
                TreeNode *top = stack.top();
                stack.pop();
                inOrder.push_back(top->val);
                root = top->right;
            }
        }

        return inOrder;
    }
};