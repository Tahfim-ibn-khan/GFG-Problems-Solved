// User function Template for javascript
/**
 * @param {string} S1
 * @param {string} S2
 * @returns {string}
 */

class Solution {
    // Function to merge two strings.
    merge(S1, S2) {
        let result = "";
        let i = 0, j = 0;

        while (i < S1.length || j < S2.length) {
            if (i < S1.length) result += S1[i++];
            if (j < S2.length) result += S2[j++];
        }

        return result;
    }
}