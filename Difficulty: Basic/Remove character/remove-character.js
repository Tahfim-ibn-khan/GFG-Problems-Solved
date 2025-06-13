// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    removeChars(s1, s2) {
        // code here
        let result="";
        for(let ch of s1){
            if(!(s2.includes(ch))) result+=ch;
        }
        return result;
    }
}
