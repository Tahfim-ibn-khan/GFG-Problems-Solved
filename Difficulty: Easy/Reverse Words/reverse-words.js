// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    // Function to reverse words in a given string.
    reverseWords(s) {
        let words=s.trim().split(/\s+/);
        words=words.reverse();
        
        return words.join(" ");
    }
}