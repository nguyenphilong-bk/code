#include <vector>

using namespace std;

class PeekableIterator
{
private:
    int current;
    vector<int> nums;

public:
    PeekableIterator(vector<int> &nums)
    {
        this->nums = nums;
        this->current = 0;
    }

    int peek()
    {
        if (this->hasnext())
        {
            this->current++;
            return this->nums[this->current];
        }

        return -1;
    }

    int next()
    {
        if (this->hasnext())
        {
            return this->current++;
        }

        return -1;
    }

    bool hasnext()
    {
        if (this->current < nums.size() - 1)
            return true;

        return false;
    }
};

int main()
{
    vector<int> nums = {1, 2, 3, 4};
    PeekableIterator test(vector<int> nums);
}