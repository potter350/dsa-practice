// === Arrays & Strings ===
// (previous content...)


// === Recursion & Backtracking ===
// (previous content...)


// === Linked Lists ===
// (previous content...)


// === Stacks & Queues ===
// (previous content...)


// === Heaps / Priority Queues ===
// (previous content...)


// === Trees ===
// (previous content...)


// === Graphs ===
// (previous content...)


// === Greedy Algorithms ===

// 1. Activity Selection Problem
function activitySelection(start, end) {
  const activities = start.map((s, i) => [s, end[i]]);
  activities.sort((a, b) => a[1] - b[1]); // Sort by finish time
  let count = 1, lastEnd = activities[0][1];
  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEnd) {
      count++;
      lastEnd = activities[i][1];
    }
  }
  return count;
}
console.log("Max Activities:", activitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));


// 2. Huffman Encoding
class HuffmanNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function huffmanEncoding(freqMap) {
  const heap = Object.entries(freqMap).map(([char, freq]) => new HuffmanNode(char, freq));
  heap.sort((a, b) => a.freq - b.freq);
  while (heap.length > 1) {
    const left = heap.shift();
    const right = heap.shift();
    const merged = new HuffmanNode(null, left.freq + right.freq, left, right);
    heap.push(merged);
    heap.sort((a, b) => a.freq - b.freq);
  }
  const codes = {};
  function generateCodes(node, code = '') {
    if (!node) return;
    if (node.char !== null) codes[node.char] = code;
    generateCodes(node.left, code + '0');
    generateCodes(node.right, code + '1');
  }
  generateCodes(heap[0]);
  return codes;
}
console.log("Huffman Codes:", huffmanEncoding({ a: 5, b: 9, c: 12, d: 13, e: 16, f: 45 }));


// 3. Fractional Knapsack
function fractionalKnapsack(weights, values, capacity) {
  const items = weights.map((w, i) => ({ weight: w, value: values[i], ratio: values[i] / w }));
  items.sort((a, b) => b.ratio - a.ratio);
  let totalValue = 0;
  for (let item of items) {
    if (capacity >= item.weight) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      totalValue += item.ratio * capacity;
      break;
    }
  }
  return totalValue;
}
console.log("Max Knapsack Value:", fractionalKnapsack([10, 20, 30], [60, 100, 120], 50)); // 240


// 4. Interval Scheduling
function intervalScheduling(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  const selected = [];
  let lastEnd = -1;
  for (let [start, end] of intervals) {
    if (start >= lastEnd) {
      selected.push([start, end]);
      lastEnd = end;
    }
  }
  return selected;
}
console.log("Selected Intervals:", intervalScheduling([[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]]));
