/**
 * @param {string} s
 * @param {string} x
 * @returns {number}
 */

class Solution {
    // Function to locate the occurrence of the string x in the string s.
    firstOccurence(s, x) {
        for (let i = 0; i <= s.length - x.length; i++) {
            let match = true;
            for (let j = 0; j < x.length; j++) {
                if (s[i + j] !== x[j]) {
                    match = false;
                    break;
                }
            }
            if (match) return i;
        }

        return -1;
    }
}
