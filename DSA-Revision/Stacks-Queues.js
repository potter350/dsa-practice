


// === Stacks & Queues ===

// 1. Infix to Postfix Conversion (Shunting Yard Algorithm)
function infixToPostfix(expr) {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [], stack = [];
  const tokens = expr.match(/\d+|[-+*/()]/g);
  for (const token of tokens) {
    if (!isNaN(token)) output.push(token);
    else if (token === '(') stack.push(token);
    else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') output.push(stack.pop());
      stack.pop();
    } else {
      while (stack.length && precedence[token] <= precedence[stack[stack.length - 1]]) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }
  while (stack.length) output.push(stack.pop());
  return output.join(' ');
}
console.log("Postfix:", infixToPostfix("3 + 4 * 2 / (1 - 5)"));


// 2. Balanced Parentheses Check
function isBalanced(expr) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for (let char of expr) {
    if ('([{'.includes(char)) stack.push(char);
    else if (')]}'.includes(char)) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}
console.log("Balanced:", isBalanced("{[()]}")); // true


// 3. Next Greater Element
function nextGreater(arr) {
  const res = Array(arr.length).fill(-1);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      res[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return res;
}
console.log("Next Greater:", nextGreater([4, 5, 2, 10])); // [5, 10, 10, -1]


// 4. Queue using Two Stacks
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(val) {
    this.stack1.push(val);
  }
  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
const q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
console.log("Dequeue:", q.dequeue()); // 1


// 5. Monotonic Stack (Histogram - Largest Rectangle)
function largestRectangleArea(heights) {
  const stack = [], n = heights.length;
  let maxArea = 0;
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i];
    while (stack.length && h < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}
console.log("Largest Histogram Area:", largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
