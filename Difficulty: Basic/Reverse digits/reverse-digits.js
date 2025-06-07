// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    reverseDigits(n) {
        n=n.toString();
        let reversed="";
        for(let i=n.length-1;i>=0;i--){
            reversed+=n[i];
        }
        return parseInt(reversed)
    }
}
