// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    checkYear(n) {
        if((n%100!=0 && n%4==0) || n%400==0 ){
                return true;
        }
        return false;
    }
}
