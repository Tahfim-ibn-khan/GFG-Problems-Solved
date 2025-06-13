/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    isBinary(s) {
        let checker=new Set(['1','0']);
        for(let ch of s){
            if(!checker.has(ch)) return false;
        }
        return true;
        
    }
}