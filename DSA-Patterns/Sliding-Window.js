
// === Sliding Window / Two Pointers ===

// 1. Longest subarray with given sum (positive integers)
function longestSubarrayWithSum(arr, target) {
  let left = 0, sum = 0, maxLen = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left++];
    }
    if (sum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}
console.log("Longest Subarray With Sum:", longestSubarrayWithSum([1, 2, 1, 0, 1, 1, 0], 4)); // 4


// 2. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  let left = 0, maxLen = 0;
  const seen = new Set();
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left++]);
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("Longest Unique Substring:", lengthOfLongestSubstring("abcabcbb")); // 3


// 3. Minimum Window Substring
function minWindow(s, t) {
  if (!s || !t) return "";
  const need = {}, window = {};
  for (let char of t) need[char] = (need[char] || 0) + 1;
  let left = 0, right = 0, valid = 0;
  let start = 0, minLen = Infinity;
  const required = Object.keys(need).length;

  while (right < s.length) {
    const c = s[right++];
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    while (valid === required) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      const d = s[left++];
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
console.log("Min Window Substring:", minWindow("ADOBECODEBANC", "ABC")); // "BANC"
