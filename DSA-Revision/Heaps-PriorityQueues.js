// === Arrays & Strings ===
// (previous content...)


// === Recursion & Backtracking ===
// (previous content...)


// === Linked Lists ===
// (previous content...)


// === Stacks & Queues ===
// (previous content...)


// === Heaps / Priority Queues ===

// 1. Min-Heap and Max-Heap using built-in PriorityQueue-like behavior
class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }
  extractMin() {
    if (this.heap.length < 2) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }
  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _bubbleDown() {
    let idx = 0;
    while (true) {
      let left = 2 * idx + 1, right = 2 * idx + 2, smallest = idx;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}
const mh = new MinHeap();
mh.insert(5); mh.insert(3); mh.insert(8); mh.insert(1);
console.log("Extract Min:", mh.extractMin()); // 1


// 2. Heapify (build heap from array)
function heapify(arr) {
  const n = arr.length;
  function siftDown(i) {
    let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      siftDown(smallest);
    }
  }
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(i);
  }
  return arr;
}
console.log("Heapified Array:", heapify([5, 3, 8, 4, 1, 2]));


// 3. Top K Elements
function topKFrequent(nums, k) {
  const map = {};
  for (let n of nums) map[n] = (map[n] || 0) + 1;
  const heap = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return heap.slice(0, k).map(entry => +entry[0]);
}
console.log("Top 2 Frequent:", topKFrequent([1,1,1,2,2,3], 2)); // [1, 2]


// 4. Median of a Stream using Two Heaps
class MedianFinder {
  constructor() {
    this.small = []; // max-heap (invert values)
    this.large = []; // min-heap
  }
  addNum(num) {
    this.small.push(-num);
    this.small.sort((a, b) => a - b);
    this.large.push(-this.small.shift());
    this.large.sort((a, b) => a - b);
    if (this.small.length < this.large.length) {
      this.small.push(-this.large.shift());
      this.small.sort((a, b) => a - b);
    }
  }
  findMedian() {
    if (this.small.length > this.large.length) return -this.small[0];
    return (-this.small[0] + this.large[0]) / 2;
  }
}
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log("Median:", mf.findMedian()); // 1.5
mf.addNum(3);
console.log("Median:", mf.findMedian()); // 2
