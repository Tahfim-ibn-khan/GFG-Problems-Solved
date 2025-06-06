// User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
    // Function to check if a string is Isogram or not.
    isIsogram(s) {
        const letters=new Set();
        for(let i=0;i<s.length;i++){
            if(letters.has(s[i])){
                return 0;
            }
            else{
                letters.add(s[i])
            }
        }
        return 1;
    }
}