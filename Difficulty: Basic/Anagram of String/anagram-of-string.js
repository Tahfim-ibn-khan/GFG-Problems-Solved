/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */

class Solution {
    remAnagram(s1, s2) {
        const freqMap = new Map();

        for (let ch of s1) {
            freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
        }

        for (let ch of s2) {
            if (freqMap.has(ch)) {
                freqMap.set(ch, freqMap.get(ch) - 1);
            } else {
                freqMap.set(ch, -1);
            }
        }

        let deletions = 0;
        for (let count of freqMap.values()) {
            deletions += Math.abs(count);
        }

        return deletions;
    }
}
