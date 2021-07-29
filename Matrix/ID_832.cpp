#include <vector>
#include <iostream>
using namespace std;
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].
class Solution
{
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>> &image)
    {
        int row = image.size();
        int col = image[0].size();

        for (int i = 0; i < row; i++)
        {
            int left = 0;
            int right = col - 1;
            while (left < right)
            {
                int temp = image[i][left];
                image[i][left] = image[i][right];
                image[i][right] = temp;
                left++;
                right--;
            }

            for (int j = 0; j < col; j++)
            {
                image[i][j] = 1 - image[i][j];
            }
        }

        return image;
    }
};

int main()
{
    Solution newSolution;
    vector<vector<int>> image = {{1, 1, 0}, {1, 0, 1}, {0, 0, 0}};
    newSolution.flipAndInvertImage(image);
    return 0;
}