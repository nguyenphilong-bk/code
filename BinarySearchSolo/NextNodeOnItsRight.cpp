#include <queue>
#include <vector>

using namespace std;

class Tree
{
public:
    int val;
    Tree *left;
    Tree *right;
    Tree()
    {
        this->val = 0;
        this->left = nullptr;
        this->right = nullptr;
    }
    Tree(int val, Tree *left, Tree *right)
    {
        this->val = val;
        this->left = left;
        this->right = right;
    }
};

Tree *solve(Tree *tree, int target)
{
    queue<Tree *> aQueue;
    aQueue.push(tree);

    while (!aQueue.empty())
    {
        int size = aQueue.size();

        for (int i = 0; i < size; i++)
        {
            Tree *temp = aQueue.front();
            if (temp->val == target)
            {
                if (i == size - 1)
                    return nullptr;
                else
                {
                    aQueue.pop();
                    return aQueue.front();
                }
            }

            if (temp->left)
                aQueue.push(temp->left);
            if (temp->right)
                aQueue.push(temp->right);

            aQueue.pop();
        }
    }

    return nullptr;
}