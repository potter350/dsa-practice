


// === Trees ===

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 1. Preorder, Inorder, Postorder Traversals
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

// 2. BST Insert, Search, Delete
function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}

function searchBST(root, val) {
  if (!root || root.val === val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

function deleteBST(root, key) {
  if (!root) return null;
  if (key < root.val) root.left = deleteBST(root.left, key);
  else if (key > root.val) root.right = deleteBST(root.right, key);
  else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let temp = root.right;
    while (temp.left) temp = temp.left;
    root.val = temp.val;
    root.right = deleteBST(root.right, temp.val);
  }
  return root;
}

// 3. Level Order Traversal (BFS)
function levelOrder(root) {
  const res = [], queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    const level = [], size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}

// 4. Height, Diameter, Balanced Tree
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function diameter(root) {
  let max = 0;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return max;
}

function isBalanced(root) {
  function check(node) {
    if (!node) return 0;
    const left = check(node.left);
    if (left === -1) return -1;
    const right = check(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  }
  return check(root) !== -1;
}

// 5. Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}

// 6. Convert Binary Tree to DLL (Inorder)
function treeToDLL(root) {
  let prev = null, head = null;
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    if (!prev) head = node;
    else {
      prev.right = node;
      node.left = prev;
    }
    prev = node;
    inorder(node.right);
  }
  inorder(root);
  return head;
}

// Example Binary Tree
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

console.log("Inorder:");
inorder(root);
console.log("Level Order:", levelOrder(root));
console.log("Height:", height(root));
console.log("Diameter:", diameter(root));
console.log("Balanced:", isBalanced(root));
