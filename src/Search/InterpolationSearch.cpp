#include <iostream>
using namespace std;
int interpolationSearch(int arr[], int left, int right, int x)
{
    int mid = left + (x - arr[left]) * (right - left) / (arr[right] - arr[left]);
    if (mid < 0)
        return -1;
    cout << "We traverse on index: " << mid << endl;
    if (left > right || (left == right && arr[left] != x))
        return -1;
    if (arr[mid] == x)
        return mid;
    else if (arr[mid] < x)
    {
        left = mid + 1;
        return interpolationSearch(arr, left, right, x);
    }
    else if (arr[mid] > x)
    {
        right = mid - 1;
        return interpolationSearch(arr, left, right, x);
    }
    return -1;
}

int main()
{
    int arr[] = {10, 12, 13, 16, 18, 19, 20,
                 21, 22, 23, 24, 33, 35, 42, 47};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 18;
    int result = interpolationSearch(arr, 0, n - 1, x);
    (result == -1) ? cout << "Element is not present in array"
                   : cout << "Element is present at index " << result;
    return 0;
}