#include <iostream>
using namespace std;

// to search for value x in array arr using recursion.
// After traverse an index in array, we print out this index using cout << "We traverse on index: " << index << endl;

// Note that middle of left and right is floor((right-left)/2)

int binarySearch(int arr[], int left, int right, int x)
{
    int mid = left + (right - left) / 2;
    cout << "We traverse on index: " << mid << endl;
    if (left > right || (left == right && arr[left] != x))
        return -1;
    if (arr[mid] == x)
        return mid;
    else if (arr[mid] < x)
    {
        left = mid + 1;
        return binarySearch(arr, left, right, x);
    }
    else if (arr[mid] > x)
    {
        right = mid - 1;
        return binarySearch(arr, left, right, x);
    }
    return -1;
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1) ? cout << "Element is not present in array"
                   : cout << "Element is present at index " << result;
}