#include <vector>
#include <iostream>
class Solution
{
public:
    int diagonalSum(std::vector<std::vector<int>> &mat)
    {
        int size = mat.size();
        int result = 0;

        for (int i = 0; i < size; i++)
        {
            result += mat[i][size - 1 - i];
            result += mat[i][i];
        }
        return size % 2 == 0 ? result : result - mat[size / 2][size / 2];
    }
};

int main()
{
    Solution aSolution;
    std::vector<std::vector<int>> mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    std::cout << aSolution.diagonalSum(mat);
}