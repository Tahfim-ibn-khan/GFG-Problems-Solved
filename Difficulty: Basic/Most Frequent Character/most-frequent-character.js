// User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
 */
class Solution {
    // Function to find the maximum occurring character in a string.
    getMaxOccuringChar(s) {
        const map = new Map();
        let max = 0;
        let result = '';

        // Count frequency
        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        // Find max frequency character
        for (let [char, freq] of map.entries()) {
            if (
                freq > max || 
                (freq === max && char < result) // Lexicographically smaller
            ) {
                max = freq;
                result = char;
            }
        }

        return result;
    }
}
