# Binary Tree

In the introduction, we have gone through the concept of a tree and a binary tree.

In this chapter, we will focus on the traversal methods used in a binary tree. Understanding these traversal methods will definitely help you have a better understanding of the tree structure and have a solid foundation for the further study.

The goal of this chapter is to:

- Understand the difference between different tree traversal methods;
- Be able to solve preorder, inorder and postorder traversal recursively;
- Be able to solve preorder, inorder and postorder traversal iteratively;
- Be able to do level traversal using BFS.

### Traverse a Tree - Introduction

- Pre-order Traversal (Root >> Left >> Right)
- In-order Traversal (Left >> Root >> Right)
- Post-order Traversal (Left >> Right >> Root)
- Recursive or Iterative (practice the three different traversal methods)

### Level-order Traversal - Introduction

Level-order traversal is to traverse the tree level by level.

Breadth-First Search is an algorithm to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visit the node itself first. Then traverse its neighbors, traverse its second level neighbors, traverse its third level neighbors, so on and so forth.

When we do breadth-first search in a tree, the order of the nodes we visited is in level order.

### Solve Tree Problems Recursively

```
"Top-down" Solution
"Bottom-up" Solution
```

In previous sections, we have introduced how to solve tree traversal problems recursively. Recursion is one of the most powerful and frequently used techniques for solving tree problems.

As we know, a tree can be defined recursively as a node(the root node) that includes a value and a list of references to children nodes. Recursion is one of the natural features of a tree. Therefore, many tree problems can be solved recursively. For each recursive function call, we only focus on the problem for the current node and call the function recursively to solve its children.

Typically, we can solve a tree problem recursively using a top-down approach or using a bottom-up approach.

##### "Top-down" Solution

"Top-down" means that in each recursive call, we will visit the node first to come up with some values, and pass these values to its children when calling the function recursively. So the "top-down" solution can be considered as a kind of preorder traversal. To be specific, the recursive function top_down(root, params) works like this:

```
1. return specific value for null node
2. update the answer if needed                      // answer <-- params
3. left_ans = top_down(root.left, left_params)      // left_params <-- root.val, params
4. right_ans = top_down(root.right, right_params)   // right_params <-- root.val, params
5. return the answer if needed                      // answer <-- left_ans, right_ans
```

For instance, consider this problem: given a binary tree, find its maximum depth.

We know that the depth of the root node is 1. For each node, if we know its depth, we will know the depth of its children. Therefore, if we pass the depth of the node as a parameter when calling the function recursively, all the nodes will know their depth. And for leaf nodes, we can use the depth to update the final answer. Here is the pseudocode for the recursive function maximum_depth(root, depth):

```
1. return if root is null
2. if root is a leaf node:
3.     answer = max(answer, depth)         // update the answer if needed
4. maximum_depth(root.left, depth + 1)     // call the function recursively for left child
5. maximum_depth(root.right, depth + 1)    // call the function recursively for right child
```

##### "Bottom-up" Solution

"Bottom-up" is another recursive solution. In each recursive call, we will firstly call the function recursively for all the children nodes and then come up with the answer according to the returned values and the value of the current node itself. This process can be regarded as a kind of postorder traversal. Typically, a "bottom-up" recursive function bottom_up(root) will be something like this:

```
1. return specific value for null node
2. left_ans = bottom_up(root.left)      // call function recursively for left child
3. right_ans = bottom_up(root.right)    // call function recursively for right child
4. return answers                       // answer <-- left_ans, right_ans, root.val
```

Let's go on discussing the question about maximum depth but using a different way of thinking: for a single node of the tree, what will be the maximum depth x of the subtree rooted at itself?

If we know the maximum depth l of the subtree rooted at its left child and the maximum depth r of the subtree rooted at its right child, can we answer the previous question? Of course yes, we can choose the maximum between them and add 1 to get the maximum depth of the subtree rooted at the current node. That is x = max(l, r) + 1.

It means that for each node, we can get the answer after solving the problem for its children. Therefore, we can solve this problem using a "bottom-up" solution. Here is the pseudocode for the recursive function maximum_depth(root):

```
1. return 0 if root is null                 // return 0 for null node
2. left_depth = maximum_depth(root.left)
3. right_depth = maximum_depth(root.right)
4. return max(left_depth, right_depth) + 1  // return depth of the subtree rooted at root
```

### Practical Examplea

##### Binary Tree Preorder Traversal

https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/

```javascript
var preorderTraversal = function (root) {
  const result = [];
  const preorder = (root) => {
    if (!root) return;
    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return result;
};
```

##### Binary Tree Preorder Traversal

https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/

```javascript
var inorderTraversal = function (root) {
  const result = [];
  const binaryTreeTraverse = (root) => {
    if (!root) return;
    binaryTreeTraverse(root.left);
    result.push(root.val);
    binaryTreeTraverse(root.right);
  };
  binaryTreeTraverse(root);
  return result;
};
```

##### Binary Tree Postorder Traversal

https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/930/

```javascript
var postorderTraversal = function (root) {
  const result = [];
  const postOrderTraversal = (root) => {
    if (!root) return;
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    result.push(root.val);
  };
  postOrderTraversal(root);
  return result;
};
```

#### Level-order Traversal - Using BFS

https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/931/

```javascript
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length !== 0) {
    const levelValues = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.pop();

      levelValues.push(node.val);

      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }

    result.push(levelValues);
  }

  return result;
};
```

#### Level-order Traversal - Top-Down Solution

```javascript
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepthAns = 1;
  const findMaxDepth = (root, depth) => {
    if (!root) return;
    if (!root.left && !root.right) maxDepthAns = Math.max(maxDepthAns, depth);
    findMaxDepth(root.left, depth + 1);
    findMaxDepth(root.right, depth + 1);
  };
  findMaxDepth(root, maxDepthAns);
  return maxDepthAns;
};
```

#### Level-Order Traversal - Bottom-up Solution

```javascript
var maxDepth = function (root) {
  if (!root) return 0;

  const left_depth_ans = maxDepth(root.left);
  const right_depth_ans = maxDepth(root.right);

  return Math.max(left_depth_ans, right_depth_ans) + 1;
};
```

#### Sum of Left Leaves Solution

https://leetcode.com/problems/sum-of-left-leaves/

```javascript
var maxDepth = function (root) {
  if (!root) return 0;

  const left_depth_ans = maxDepth(root.left);
  const right_depth_ans = maxDepth(root.right);

  return Math.max(left_depth_ans, right_depth_ans) + 1;
};
```

#### Sum Root to Leaf Numbers Solution

https://leetcode.com/problems/sum-of-left-leaves/

```javascript
var sumNumbers = function (root) {
  let sum = 0;
  const dfs = (root, previousVal) => {
    if (!root) return 0;

    if (!root.left && !root.right) sum += parseInt(previousVal + root.val + '');

    dfs(root.left, previousVal + root.val + '');
    dfs(root.right, previousVal + root.val + '');
  };
  dfs(root, sum);
  return sum;
};
```

#### Unique Binary Search Trees - Javascript

https://leetcode.com/problems/unique-binary-search-trees

```javascript
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = dp[0] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
};
```

#### Symmetric Tree

```javascript
var isSymmetric = function (root) {
  if (!root) return true;
  const traverseTree = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return left.val === right.val && traverseTree(left.right, right.left) && traverseTree(left.left, right.right);
  };

  return traverseTree(root.left, root.right);
};
```

#### Path Sum - Binary Tree

```javascript
var hasPathSum = function (root, targetSum) {
  let hasPath = false;
  const traverseTree = (root, prevValue = 0) => {
    if (!root) return;

    prevValue += root.val;
    if (!root.left && !root.right && prevValue === targetSum) hasPath = true;
    traverseTree(root.left, prevValue);
    traverseTree(root.right, prevValue);
  };

  traverseTree(root);
  return hasPath;
};
```

#### Sum Root To Leaf Of Binary Search Tree

```javascript
var sumRootToLeaf = function (root) {
  let sum = 0;
  const dfs = (root, prev = '') => {
    if (!root) return;
    prev += root.val;

    if (!root.left && !root.right) {
      sum += parseInt(prev, 2);
    }

    dfs(root.left, prev);
    dfs(root.right, prev);
  };
  dfs(root);
  return sum;
};
```

#### Insert into Binary Search Tree

```javascript
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
```

#### All Elements in Two Binary Search Trees

https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

```javascript
var getAllElements = function (root1, root2) {
  const results = [];
  const traverseTree = (root) => {
    if (!root) return;

    results.push(root.val);

    traverseTree(root.left);
    traverseTree(root.right);
  };

  traverseTree(root1);
  traverseTree(root2);
  return results.sort((a, b) => a - b);
};
```

#### Count Good Nodes Problem

```javascript
var goodNodes = function (root) {
  let goodNodesCounter = 0;

  const dfs = (root, val) => {
    if (!root) return;

    if (root.val >= val) {
      goodNodesCounter++;
    }

    const maxVal = Math.max(root.val, val);
    dfs(root.left, maxVal);
    dfs(root.right, maxVal);
  };

  dfs(root, Number.MIN_SAFE_INTEGER);

  return goodNodesCounter;
};
```

#### Shortest Distance Between Two Nodes (LCA) Lowest Common Ancestor

```javascript
var minDiffInBST = function (root, a = 3, b = 9) {
  let minDiff = 0;

  // Takes LCA
  const sumDistance = (root, distance) => {
    if (!root) return;

    distance += 1;
    if (root.val === a || root.val === b) {
      minDiff += distance;
    }

    sumDistance(root.left, distance);
    sumDistance(root.right, distance);
  };
  const dfs = (root) => {
    if (!root) return;

    if (a > root.val && b > root.val) {
      return dfs(root.right);
    }

    if (a < root.val && b < root.val) {
      return dfs(root.left);
    }
    sumDistance(root.left, 0);
    sumDistance(root.right, 0);
  };

  dfs(root);

  return minDiff;
};
```

#### Construct Binary Tree from Inorder and Postorder Traversal

```javascript
var buildTree1 = function (inorder, postorder) {
  const nodesMap = {};

  inorder.forEach((val, index) => (nodesMap[val] = index));
  let leftPointer = 0;
  let rightPointer = inorder.length - 1;

  const construct = (start, end) => {
    if (start > end) return null;

    const nodeVal = postorder.pop();
    const nodeIndex = nodesMap[nodeVal];

    const root = new TreeNode(nodeVal);
    root.right = construct(nodeIndex + 1, end);
    root.left = construct(start, nodeIndex - 1);

    return root;
  };

  return construct(leftPointer, rightPointer);
};
```

#### Construct Binary Tree from Preorder and Inorder Traversal

```javascript
var buildTree = function (preorder, inorder) {
  const nodesMap = {};
  const leftPointer = 0;
  const rightPointer = inorder.length - 1;

  inorder.forEach((val, index) => (nodesMap[val] = index));

  const construct = (start, end) => {
    if (start > end) return null;

    const nodeVal = preorder.shift();
    const root = new TreeNode(nodeVal);

    const nodeIndex = nodesMap[nodeVal];

    root.left = construct(start, nodeIndex - 1);
    root.right = construct(nodeIndex + 1, end);

    return root;
  };

  return construct(leftPointer, rightPointer);
};
```

#### Populating Next Right Pointers in Each Node

```javascript
var connect = function (root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      node.next = i === n - 1 ? null : queue[0];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
```
