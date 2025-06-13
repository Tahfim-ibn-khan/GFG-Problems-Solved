// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    removeVowels(s) {
        let vowels=new Set(['a','e','i','o','u']);
        let result="";
        for(let ch of s){
            if(!(vowels.has(ch))) result+=ch
        }
        return result;
    }
}
