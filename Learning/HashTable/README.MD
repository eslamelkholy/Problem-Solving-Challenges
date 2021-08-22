# Hash Table Study Cases At Leetcode

https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/

### The Principle of Built-in Hash Table

The typical design of built-in hash table is:

- The key value can be any hashable type. And a value which belongs to a hashable type will have a hashcode. This code will be used in the mapping function to get the bucket index.
- Each bucket contains an array to store all the values in the same bucket initially.
  If there are too many values in the same bucket, these values will be maintained in a height-balanced binary search tree instead.
- The average time complexity of both insertion and search is still O(1). And the time complexity in the worst case is O(logN) for both insertion and search by using height-balanced BST. It is a trade-off between insertion and search.
