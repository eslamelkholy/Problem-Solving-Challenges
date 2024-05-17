/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const queue = [root];
  let serializedTree = "";

  while (queue.length > 0) {
    const N = queue.length;
    const levelData = [];

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();

      levelData.push(!currentNode ? "#" : currentNode.val);
      if (!currentNode) continue;

      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }

    serializedTree += levelData.length > 1 ? "," + levelData.join(",") : levelData.join(",");
  }
  return serializedTree;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const values = data.split(",");
  if (values[0] === "#") return null;

  const root = new TreeNode(values[0]);
  const queue = [root];
  let pointer = 1; // this 1 since we added the root

  while (queue.length > 0 && pointer < values.length) {
    const currentNode = queue.shift();

    if (values[pointer] !== "#") {
      const left = new TreeNode(values[pointer]);

      currentNode.left = left;

      queue.push(left);
    }

    pointer++;

    if (values[pointer] !== "#") {
      const right = new TreeNode(values[pointer]);

      currentNode.right = right;

      queue.push(right);
    }

    pointer++;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
