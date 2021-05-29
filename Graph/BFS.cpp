#include <iostream>
#include <list>
#include <queue>
#include <vector>
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
        // * Return element at idx-th index
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

    Adjacency *BFS(int s)
    {
        list<int> queue;

        // Mark the current node as visited and enqueue it
        bool *visited = new bool[V];
        for (int i = 0; i < V; i++)
            visited[i] = false;
        visited[s] = true;

        queue.push_back(s);

        // 'i' will be used to get all adjacent
        // vertices of a vertex
        list<int>::iterator i;
        Adjacency *result = new Adjacency();
        while (!queue.empty())
        {
            // Dequeue a vertex from queue and print it
            s = queue.front();
            result->push(s);
            queue.pop_front();

            // Get all adjacent vertices of the dequeued
            // vertex s. If a adjacent has not been visited,
            // then mark it visited and enqueue it
            for (int i = 0; i < adj[s].getSize(); i++)
            {
                if (!visited[adj[s].getElement(i)])
                {
                    visited[adj[s].getElement(i)] = true;
                    queue.push_back(adj[s].getElement(i));
                }
            }
            // for (i = adj[s].begin(); i != adj[s].end(); ++i)
            // {
            //     if (!visited[*i])
            //     {
            //         visited[*i] = true;
            //         queue.push_back(*i);
            //     }
            // }
        }
        return result;
    }
};

int main()
{
    int V = 6;
    int visited = 2;

    Graph g(V);
    Adjacency *arr = new Adjacency(V);
    int edge[][2] = {{0, 1}, {0, 2}, {1, 3}, {1, 4}, {2, 4}, {3, 4}, {3, 5}, {4, 5}};

    for (int i = 0; i < 8; i++)
    {
        g.addEdge(edge[i][0], edge[i][1]);
    }
    // g.printGraph();
    // cout << endl;
    arr = g.BFS(visited);
    arr->printArray();
    // cout << "======";
    delete arr;
    return 0;
}