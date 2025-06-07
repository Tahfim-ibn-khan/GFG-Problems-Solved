// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    // Function to remove consonants from a string.
    removeConsonants(s) {
        let result="";
        const vowels=new Set(["a","e","i","o","u","A","E","I","O","U"]);
        for(let i=0; i<s.length; i++){
            if(vowels.has(s[i])){
              result+=s[i] ;
            }
        }
        if(result.length>0)return result;
        return "No Vowel"
    }
}