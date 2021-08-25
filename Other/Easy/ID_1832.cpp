#include <string>
#include <set>

class Solution
{
public:
    bool checkIfPangram(std::string input);
};

bool Solution::checkIfPangram(std::string input)
{
    std::set<char> character;

    for (int i = 0; i < input.length(); i++)
        character.insert(input[i]);

    return character.size() == 26;
}