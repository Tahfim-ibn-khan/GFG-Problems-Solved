// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    // Function to calculate sum of all numbers present in a string.
    findSum(s) {
        // code here
        let sum=0;
        let num="";
        for (const ch of s) {
            if (ch >= '0' && ch <= '9') {
                num += ch;
            } else if (num.length > 0) {
                sum += parseInt(num);
                num = "";
            }
        }
        
        if (num.length > 0) {
            sum += parseInt(num);
        }
        
        return sum;
    }
}