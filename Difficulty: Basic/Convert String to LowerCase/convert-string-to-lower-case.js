// User function Template for javascript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    toLower(s) {
        // code here
        let result="";
        for(let ch of s){
            if((ch>='A' && ch<='Z')) result+=String.fromCharCode(ch.charCodeAt(0) + 32)
            else result+=ch
        }
        return result;
    }
}