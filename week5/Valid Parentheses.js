class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const pairs = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    const stack = [];

    for (let ch of s) {
      // If it's a closing bracket, check top of stack
      if (ch in pairs) {
        // Pop top (or use a sentinel if stack empty)
        const top = stack.length ? stack.pop() : '#';
        if (top !== pairs[ch]) return false;
      } else {
        // It's an opening bracket -> push
        stack.push(ch);
      }
    }

    // If stack empty -> all matched
    return stack.length === 0;
  }
}