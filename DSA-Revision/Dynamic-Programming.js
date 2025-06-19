
// === Dynamic Programming (DP) ===

// 1. 0/1 Knapsack (Bottom-Up DP)
function knapsack(weights, values, W) {
  const n = weights.length;
  const dp = Array(n + 1).fill(0).map(() => Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] <= w)
        dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
      else
        dp[i][w] = dp[i - 1][w];
    }
  }
  return dp[n][W];
}
console.log("0/1 Knapsack:", knapsack([1, 2, 3], [10, 15, 40], 6)); // 65


// 2. Longest Common Subsequence (LCS)
function lcs(s1, s2) {
  const dp = Array(s1.length + 1).fill().map(() => Array(s2.length + 1).fill(0));
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[s1.length][s2.length];
}
console.log("LCS:", lcs("abcde", "ace")); // 3


// 3. Longest Increasing Subsequence (LIS)
function lis(arr) {
  const dp = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}
console.log("LIS:", lis([10, 9, 2, 5, 3, 7, 101, 18])); // 4


// 4. Matrix DP - Min Cost Path
function minCostPath(cost) {
  const m = cost.length, n = cost[0].length;
  const dp = Array(m).fill().map(() => Array(n).fill(0));
  dp[0][0] = cost[0][0];
  for (let i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + cost[i][0];
  for (let j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + cost[0][j];
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = cost[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}
console.log("Min Cost Path:", minCostPath([[1, 2, 3], [4, 8, 2], [1, 5, 3]])); // 11


// 5. Unique Paths (Matrix DP)
function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
console.log("Unique Paths:", uniquePaths(3, 7)); // 28


// 6. DP on Trees (e.g., Maximum Sum in Tree without Adjacent Nodes)
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function maxSumTree(root) {
  function dfs(node) {
    if (!node) return [0, 0]; // [include, exclude]
    const [lInc, lExc] = dfs(node.left);
    const [rInc, rExc] = dfs(node.right);
    const include = node.val + lExc + rExc;
    const exclude = Math.max(lInc, lExc) + Math.max(rInc, rExc);
    return [include, exclude];
  }
  return Math.max(...dfs(root));
}
const treeRoot = new TreeNode(10);
treeRoot.left = new TreeNode(1);
treeRoot.right = new TreeNode(2);
treeRoot.left.left = new TreeNode(3);
treeRoot.left.right = new TreeNode(4);
console.log("Max Sum in Tree:", maxSumTree(treeRoot));


// 7. Memoization vs Tabulation Example - Fibonacci
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}
console.log("Fibonacci Memo:", fibMemo(10));
console.log("Fibonacci Tab:", fibTab(10));