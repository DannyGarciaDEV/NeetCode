// Valid Anagram
// Solved 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

          if (s.length !== t.length) return false;

        // Sort both strings and compare
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}

    

    /// we have to check if two strings have the same letters
    //if they do is true no matter the other
    // but if they dont have the same letter and only one is missing is false
    
