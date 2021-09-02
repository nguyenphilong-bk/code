#include <vector>
#include <algorithm>
#include <iostream>

class Solution
{
public:
    int solve(std::vector<int> piles)
    {
        int left = 0;
        int right = piles.size();
        std::sort(piles.begin(), piles.end(), std::greater<int>());
        int result = 0;

        while (left < right)
        {
            left++;
            right--;
            result += piles[left];
            left++;
            right--;
        }

        return result;
    }
};

int main()
{
    Solution test;
    std::vector<int> piles = {2,
                              4,
                              1,
                              3,
                              5,
                              6};

    int result = test.solve(piles);
    std::cout << result;
    return 0;
}
