// Longest Repeating Character Replacement
// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:

// Input: s = "XYYX", k = 2

// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:

// Input: s = "AAABABB", k = 1

// Output: 5
// Constraints:

// 1 <= s.length <= 1000
// 0 <= k <= s.length

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
     characterReplacement(s, k) {
        let left = 0;
        let maxCount = 0; // max frequency of a single char in the current window
        let count = {}; // character frequency map
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            count[char] = (count[char] || 0) + 1;
            maxCount = Math.max(maxCount, count[char]);

            // If replacements needed exceed k, shrink window from left
            while ((right - left + 1) - maxCount > k) {
                count[s[left]]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
