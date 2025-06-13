// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    uncommonChars(s1, s2) {
        const set1 = new Set(s1);
        const set2 = new Set(s2);
        const result = [];

        for (let ch of set1) {
            if (!set2.has(ch)) result.push(ch);
        }

        for (let ch of set2) {
            if (!set1.has(ch)) result.push(ch);
        }

        if (result.length === 0) return "";

        return result.sort().join('');
    }
}

