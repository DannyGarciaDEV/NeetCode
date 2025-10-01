// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:

// Input: s = "OUZODYXAZV", t = "XYZ"

// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:

// Input: s = "xyz", t = "xyz"

// Output: "xyz"
// Example 3:

// Input: s = "x", t = "xy"

// Output: ""
// Constraints:

// 1 <= s.length <= 1000
// 1 <= t.length <= 1000
// s and t consist of uppercase and lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        // Frequency map for t
        const need = new Map();
        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let left = 0, right = 0;
        let required = need.size;  // number of unique chars still needed
        let formed = 0;            // how many unique chars satisfied
        const windowCount = new Map();

        let ans = [Infinity, 0, 0]; // [windowLength, left, right]

        while (right < s.length) {
            const c = s[right];
            windowCount.set(c, (windowCount.get(c) || 0) + 1);

            if (need.has(c) && windowCount.get(c) === need.get(c)) {
                formed++;
            }

            // Try to shrink from left
            while (left <= right && formed === required) {
                if (right - left + 1 < ans[0]) {
                    ans = [right - left + 1, left, right];
                }

                const d = s[left];
                windowCount.set(d, windowCount.get(d) - 1);
                if (need.has(d) && windowCount.get(d) < need.get(d)) {
                    formed--;
                }
                left++;
            }

            right++;
        }

        return ans[0] === Infinity ? "" : s.slice(ans[1], ans[2] + 1);
    }
}