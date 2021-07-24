#include <vector>
#include <string>
using namespace std;

/* Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 */

class Solution
{
public:
    string restoreString(string s, vector<int> &indices)
    {
        string result = s;
        for (int i = 0; i < indices.size(); i++)
            result[indices[i]] = s[i];
        return result;
    }
};