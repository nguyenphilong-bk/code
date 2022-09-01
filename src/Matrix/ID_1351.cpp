#include <vector>
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
class Solution
{
public:
    int countNegatives(std::vector<std::vector<int>> &grid)
    {
        int row = grid.size();
        int col = grid[0].size();
        int result = 0;

        for (int i = 0; i < row; i++)
        {
            for (int j = col - 1; j >= 0; j--)
            {
                if (grid[i][j] >= 0)
                    break;
                result++;
            }
        }

        return result;
    }
};