// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    concatenatedString(s1, s2) {
        const set1 = new Set(s1);
        const set2 = new Set(s2);
        let result = [];

        for (let ch of s1) {
            if (!set2.has(ch)) result.push(ch);
        }

        for (let ch of s2) {
            if (!set1.has(ch)) result.push(ch);
        }

        return result.length === 0 ? "-1" : result.join('');
    }
}
