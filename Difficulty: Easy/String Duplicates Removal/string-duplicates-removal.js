// User function Template for javascript

/**
 * @param {string} n
 * @return {string}
 */

class Solution {
    removeDuplicates(s) {
        const checker=new Set();
        let str="";
        for(let ch of s){
            if(!checker.has(ch)){
                checker.add(ch)
                str+=ch;
            }
        }
        return str;
    }
}