// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    factorial(n) {
        // code here
        let factorial=1n;
        let str=[];
        for(let i=1n;i<=BigInt(n);i++){
            factorial*=i;
        }
        factorial=factorial.toString();
        for(let i of factorial){
            str.push(parseInt(i));
        }
        return str;
    }
}
