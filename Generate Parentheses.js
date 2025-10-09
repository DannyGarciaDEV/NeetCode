// Generate Parentheses
// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Example 1:

// Input: n = 1

// Output: ["()"]
// Example 2:

// Input: n = 3

// Output: ["((()))","(()())","(())()","()(())","()()()"]
// You may return the answer in any order.

// Constraints:

// 1 <= n <= 7

class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const res = [];

    const backtrack = (curr, open, close) => {
      if (curr.length === 2 * n) {
        res.push(curr);
        return;
      }

      if (open < n) backtrack(curr + "(", open + 1, close);
      if (close < open) backtrack(curr + ")", open, close + 1);
    };

    backtrack("", 0, 0);
    return res;
  }}