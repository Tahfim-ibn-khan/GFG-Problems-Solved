// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    firstRepChar(s) {
        const checker=new Set();
        for(const ch of s){
            if(checker.has(ch)) return ch;
            checker.add(ch);
        }
        return "-1";
    }
}