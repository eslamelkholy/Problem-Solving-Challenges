/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// This Solution Using For Traverse Each Node in Binrary Tree and Put it Into Array
// It Useful if you want to Traverse Each Node But Our SOlution is to Traver Each Level !!!!!!
var averageOfLevels = function (root) {
  const walk = (node, result) => {
    if(node === null) return result;
    result.push(node.val)
    walk(node.left, result)
    walk(node.right, result)
    return result
  }

  return walk(root, [])
};

// This Code is the Best Solution if you want to Traverse Binary Tree With Each Level
var averageOfLevels = function (root) {
  const result = [];
  if (root === null) result;
  // BFS
  const queue = [root];
  while (queue.length > 0) {
    queue.push(null);
    const level = [];
    let head;
    while ((head = queue.shift())) {
      level.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    result.push(level);
  }

  return result;
};

// So The Final Solution To Traverse Each Level and Get it's Average

var averageOfLevels = function (root) {
  const levelResult = [];
  const average = [];
  if (root === null) result;
  const queue = [root];
  while (queue.length > 0) {
    queue.push(null);
    const level = [];
    let head;
    while ((head = queue.shift())) {
      level.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    levelResult.push(level);
  }
  for (let i = 0; i < levelResult.length; i++) {
    average.push(levelResult[i].reduce((a, b) => a + b, 0) / levelResult[i].length);
  }
  return average;
};
