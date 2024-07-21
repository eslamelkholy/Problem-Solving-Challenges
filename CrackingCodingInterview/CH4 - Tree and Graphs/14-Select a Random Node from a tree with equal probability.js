// https://www.geeksforgeeks.org/select-random-node-tree-equal-probability/

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
    this.children = 0;
  }
}

// This is used to fill children counts.
function getElements(root) {
  if (root == null) return 0;
  return getElements(root.left) + getElements(root.right) + 1;
}

// Inserts Children count for each node
function insertChildrenCount(root) {
  if (root == null) return null;

  root.children = getElements(root) - 1;
  root.left = insertChildrenCount(root.left);
  root.right = insertChildrenCount(root.right);
  return root;
}

// returns number of children for root
function children(root) {
  if (root == null) return 0;
  return root.children + 1;
}

// Helper Function to return a random node
function randomNodeUtil(root, count) {
  if (root == null) return 0;

  if (count == children(root.left)) return root.data;

  if (count < children(root.left)) return randomNodeUtil(root.left, count);

  return randomNodeUtil(root.right, count - children(root.left) - 1);
}

// Returns Random node
function randomNode(root) {
  let count = Math.floor(Math.random() * (root.children + 1));
  return randomNodeUtil(root, count);
}

// Driver Code
// Creating Above Tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.right = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

insertChildrenCount(root);

document.write("A Random Node From Tree : " + randomNode(root) + "<br>");

// This code is contributed by avanitrachhadiya2155
