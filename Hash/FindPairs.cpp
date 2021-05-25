#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <algorithm>
#include <iostream>
#include <utility>
#include <map>
#include <vector>
#include <set>
using namespace std;

bool findPairs(int arr[], int n, pair<int, int> &pair1, pair<int, int> &pair2)
{
    // Create an empty Hash to store mapping from sum to
    // pair indexes
    map<int, pair<int, int>> Hash;

    // Traverse through all possible pairs of arr[]
    for (int i = 0; i < n; ++i)
    {
        for (int j = i + 1; j < n; ++j)
        {
            // If sum of current pair is not in hash,
            // then store it and continue to next pair
            int sum = arr[i] + arr[j];
            if (Hash.find(sum) == Hash.end())
                Hash[sum] = make_pair(i, j);

            else // Else (Sum already present in hash)
            {
                // Find previous pair
                pair<int, int> pp = Hash[sum]; // pp->previous pair

                // Since array elements are distinct, we don't
                // need to check if any element is common among pairs
                pair1.first = arr[pp.first];
                pair1.second = arr[pp.second];
                pair2.first = arr[i];
                pair2.second = arr[j];
                // pair2.first = arr[i];
                // pair2.second = arr[j];
                // cout << "(" << pp.first << ", " << pp.second
                //      << ") and (" << arr[i] << ", " << arr[j] << ")n";
                return true;
            }
        }
    }

    // cout << "No pairs found";
    return false;
}

int main()
{
    int arr[] = {3, 4, 7, 1, 2, 9, 8};
    int n = sizeof arr / sizeof arr[0];
    pair<int, int> pair1, pair2;
    findPairs(arr, n, pair1, pair2);
    cout << pair1.first << "**" << pair1.second << endl;
    cout << pair2.first << "**" << pair2.second << endl;
    return 0;
}