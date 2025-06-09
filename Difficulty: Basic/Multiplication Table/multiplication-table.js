// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */
class Solution {
    getTable(n) {
        let result = [];
        for (let i = 1; i <= 10; i++) {
            result.push(n * i);
        }
        return result;
    }
}
