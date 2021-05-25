#include <string>
#include <cmath>
#include <iostream>
using namespace std;

int foldShift(long long key, int addressSize)
{
    int notChange = addressSize;
    string keyStr = to_string(key);
    long long result = 0;
    while (keyStr.length() > 0)
    {
        addressSize = addressSize < (int)keyStr.length() ? addressSize : keyStr.length();
        string temp = keyStr.substr(0, addressSize);
        result += stoi(temp);
        keyStr.erase(keyStr.begin(), keyStr.begin() + addressSize);
    }
    return result % (int)pow(10, notChange);
}
int rotation(long long key, int addressSize)
{
    if (key < 10)
        return foldShift(key, addressSize);
    long long size = to_string(key).length();
    long long last = key % 10;
    key /= 10;
    key += (long long)pow(10, size - 1) * last;
    return foldShift(key, addressSize);
}
int main()
{
    cout << rotation(123456789213123123, 5);
    return 0;
}