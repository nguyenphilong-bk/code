#include <iostream>
#include <cmath>

using namespace std;
// In computer science, a jump search or block search refers to a search algorithm for ordered lists. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements. For example, suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x. The optimal value of m is √n, where n is the length of the list.

// In this question, we need to implement function jumpSearch with step √n to search for value x in array arr. After searching at an index, we should print that index until we find the index of value x in array or until we determine that the value is not in the array.
int jumpSearch(int arr[], int x, int n)
{
    int before = 0, after = 0;
    int step = sqrt(n);
    while (arr[min(after, n - 1)] < x)
    {
        cout << min(after, n - 1) << " ";
        before = after;
        after += step;
        if (after >= n - 1)
        {
            after = n - 1;
            break;
        }
    }
    before++;
    after = min(after, n - 1);
    if (arr[after] == x)
    {
        cout << after;
        return after;
    }
    if (after < n - 1)
        cout << after << " ";
    while (before <= after)
    {
        if (arr[before] == x)
        {
            cout << before;
            return before;
        }
        if (arr[before] > x)
            return -1;
        cout << before << " ";
        before++;
    }
    cout << before;
    return -1;
}
int main()
{

    int arr[] = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
    int x = 55;
    int n = sizeof(arr) / sizeof(arr[0]);
    int index = jumpSearch(arr, x, n);

    if (index != -1)
    {
        cout << "\nNumber " << x << " is at index " << index;
    }
    else
    {
        cout << "\n"
             << x << " is not in array!";
    }
}
