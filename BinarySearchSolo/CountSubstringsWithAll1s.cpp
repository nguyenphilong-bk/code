#include <string>
#include <cmath>
#include <iostream>

using namespace std;
int solve(string s)
{
    int result = 0;
    int count = 0;
    for (int i = 0; i < s.length(); i++)
    {
        cout << s[i] << " ";
        if (s[i] == '1')
            count++;
        else
        {
            cout << count << endl;
            result += (count * (count + 1)) / 2;
            count = 0;
        }
    }
    result += (count * (count + 1)) / 2;

    return result % ((int)pow(10, 9) + 7);
}

int main()
{
    string s = "111001";
    cout << solve(s);
}