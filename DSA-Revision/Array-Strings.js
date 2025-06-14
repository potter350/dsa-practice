// 1. Traversal, Insertion, Deletion
// Traversal
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log("Traversal:", arr[i]);
}

// Insertion at end
arr.push(40); // [10, 20, 30, 40]

// Insertion at beginning
arr.unshift(0); // [0, 10, 20, 30, 40]

// Deletion from end
arr.pop(); // [0, 10, 20, 30]

// Deletion from beginning
arr.shift(); // [10, 20, 30]


// 2. Sliding Window
// Find max sum of subarray of size k
function maxSumSubarray(arr, k) {
  let max = 0, sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}
console.log("Sliding Window Max Sum:", maxSumSubarray([1, 2, 3, 4, 5], 3)); // 12


// 3. Two Pointers
// Check if array has two elements that sum to target
function hasPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  return false;
}
console.log("Two Pointers Sum:", hasPairWithSum([1, 3, 2, 4], 6)); // true


// 4. Prefix Sum / Difference Array
// Find sum of subarray i to j efficiently
function buildPrefixSum(arr) {
  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}
const prefix = buildPrefixSum([2, 4, 6, 8]);
console.log("Prefix Sum (1-3):", prefix[4] - prefix[1]); // sum from index 1 to 3 => 4+6+8 = 18


// 5. String Reversal and Palindrome Check
function reverseString(str) {
  return str.split('').reverse().join('');
}
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++; right--;
  }
  return true;
}
console.log("Reversed:", reverseString("hello")); // "olleh"
console.log("Is Palindrome:", isPalindrome("racecar")); // true


// 6. Pattern Matching (Naive and KMP)
// Naive pattern matching
function naiveSearch(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
console.log("Naive Search:", naiveSearch("ababcabcababd", "ababd")); // 9

// KMP pattern matching
function buildLPS(pattern) {
  const lps = [0];
  let length = 0, i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

function kmpSearch(text, pattern) {
  const lps = buildLPS(pattern);
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++; j++;
    }
    if (j === pattern.length) {
      return i - j; // Match found
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
  }
  return -1;
}
console.log("KMP Search:", kmpSearch("abxabcabcaby", "abcaby")); // 6
