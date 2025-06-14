

// === Recursion & Backtracking ===

// 1. Base case and recursion tree
// Example: Recursive sum of array
function recursiveSum(arr, i = 0) {
  if (i === arr.length) return 0; // base case
  return arr[i] + recursiveSum(arr, i + 1); // recursion
}
console.log("Recursive Sum:", recursiveSum([1, 2, 3, 4])); // 10


// 2. Factorial (recursive)
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // 120


// 3. Fibonacci (recursive with memoization)
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}
console.log("Fibonacci(6):", fibonacci(6)); // 8


// 4. Permutations
function permutations(arr, path = [], used = [], result = []) {
  if (path.length === arr.length) {
    result.push([...path]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    path.push(arr[i]);
    permutations(arr, path, used, result);
    path.pop();
    used[i] = false;
  }
  return result;
}
console.log("Permutations:", permutations([1, 2, 3]));


// 5. Combinations (n choose k)
function combine(n, k, start = 1, path = [], result = []) {
  if (path.length === k) {
    result.push([...path]);
    return;
  }
  for (let i = start; i <= n; i++) {
    path.push(i);
    combine(n, k, i + 1, path, result);
    path.pop();
  }
  return result;
}
console.log("Combinations (4C2):", combine(4, 2));


// 6. Backtracking: N-Queens
function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const result = [];

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);
  return result;
}
console.log("N-Queens(4):", solveNQueens(4));


// 7. Backtracking: Sudoku Solver
function solveSudoku(board) {
  function isValid(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] == val || board[i][c] == val || board[3 * Math.floor(r/3) + Math.floor(i/3)][3 * Math.floor(c/3) + i % 3] == val)
        return false;
    }
    return true;
  }

  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let val = 1; val <= 9; val++) {
            if (isValid(r, c, String(val))) {
              board[r][c] = String(val);
              if (solve()) return true;
              board[r][c] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  solve();
}


// 8. Backtracking: Subsets
function subsets(nums) {
  const result = [];
  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(0, []);
  return result;
}
console.log("Subsets:", subsets([1, 2, 3]));


// 9. Backtracking: Combination Sum
function combinationSum(candidates, target) {
  const result = [];
  function dfs(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  dfs(0, [], 0);
  return result;
}
console.log("Combination Sum:", combinationSum([2,3,6,7], 7));
