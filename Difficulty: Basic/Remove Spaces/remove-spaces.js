// User function Template for javascript

/**
 * @param {string}s
 * @returns {string}
 */

class Solution {
    modify(s) {
        // code here
        let result="";
        for(let ch of s){
            if(!(ch==" ")){
                result+=ch;
            }
        }
        return result;
        // result=s.trim().split(/\s/);
        // return result.join('');
    }
}
