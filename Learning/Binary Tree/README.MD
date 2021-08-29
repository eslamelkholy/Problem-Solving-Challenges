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
