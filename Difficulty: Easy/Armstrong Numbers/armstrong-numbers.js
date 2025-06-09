// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    armstrongNumber(n) {
        let val=0;
        let counter=0;
        let number=n;
        while (n>0){
           val=n%10;
           counter+=Math.pow(val,3);
           n=Math.floor(n/10);
        }
        if(counter==number) return true;
        return false;
    }
}
