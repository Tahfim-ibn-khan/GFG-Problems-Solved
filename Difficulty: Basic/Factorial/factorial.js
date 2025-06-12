// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        let count=1;
        for(let i=1;i<=n;i++){
            count*=i;
        }
        return count;
    }
}
