#include <iostream>
#include <list>
#include <vector>
#include <stack>
using namespace std;

class Adjacency
{
private:
    list<int> adjList;
    int size;

public:
    Adjacency() {}
    Adjacency(int V) {}
    void push(int data)
    {
        adjList.push_back(data);
        size++;
    }
    void print()
    {
        for (auto const &i : adjList)
            cout << " -> " << i;
    }
    void printArray()
    {
        for (auto const &i : adjList)
            cout << i << " ";
    }
    int getSize() { return adjList.size(); }
    int getElement(int idx)
    {
        auto it = adjList.begin();
        advance(it, idx);
        return *it;
    }
};

class Graph
{
private:
    int V;
    Adjacency *adj;

public:
    Graph(int V)
    {
        this->V = V;
        adj = new Adjacency[V];
    }

    void addEdge(int v, int w)
    {
        adj[v].push(w);
        adj[w].push(v);
    }

    void printGraph()
    {
        for (int v = 0; v < V; ++v)
        {
            cout << "\nAdjacency list of vertex " << v << "\nhead ";
            adj[v].print();
        }
    }

    Adjacency *DFS(int s)
    {
        // v is a vertex we start DFS
        vector<bool> visited(V, false);

        // Create a stack for DFS
        stack<int> stack;

        // Push the current source node.
        stack.push(s);
        Adjacency *result = new Adjacency();
        while (!stack.empty())
        {
            // Pop a vertex from stack and print it
            s = stack.top();
            stack.pop();

            // Stack may contain same vertex twice. So
            // we need to print the popped item only
            // if it is not visited.
            if (!visited[s])
            {
                result->push(s);
                visited[s] = true;
            }

            // Get all adjacent vertices of the popped vertex s
            // If a adjacent has not been visited, then push it
            // to the stack.
            for (int i = adj[s].getSize() - 1; i >= 0; i--)
            {
                if (!visited[adj[s].getElement(i)])
                    stack.push(adj[s].getElement(i));
            }
            // for (auto i = adj[s].begin(); i != adj[s].end(); ++i)
            //     if (!visited[*i])
            //         stack.push(*i);
        }
        return result;
    }
};

int main()
{
    int V = 8, visited = 0;

    Graph g(V);
    Adjacency *arr;
    int edge[][2] = {{0, 1}, {0, 2}, {0, 3}, {0, 4}, {1, 2}, {2, 5}, {2, 6}, {4, 6}, {6, 7}};
    for (int i = 0; i < 9; i++)
    {
        g.addEdge(edge[i][0], edge[i][1]);
    }

    // g.printGraph();
    // cout << endl;
    arr = g.DFS(visited);
    arr->printArray();
    delete arr;
}