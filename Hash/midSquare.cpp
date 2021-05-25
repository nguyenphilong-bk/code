#include <iostream>
#include <string>

using namespace std;

long int midSquare(long int seed)
{
    long int temp = seed * seed;
    temp /= 100;
    return temp % 10000;
}
long int moduloDivision(long int seed, long int mod)
{
}
long int digitExtraction(long int seed, int *extractDigits, int size)
{
    string seedStr = to_string(seed);
    string result = "";
    for (int i = 0; i < size; i++)
    {
        result += seedStr[extractDigits[i]];
    }
    return stoi(result);
}

int main()
{
    int a[] = {1, 2, 5};
    cout << digitExtraction(122443, a, 3) << endl;
    cout << midSquare(9452);
}