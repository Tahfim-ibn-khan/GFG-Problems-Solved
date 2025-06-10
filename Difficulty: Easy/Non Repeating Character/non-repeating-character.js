// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
    nonRepeatingChar(s) {
        const frequency= new Map();
        for(const ch of s){
            frequency.set(ch, (frequency.get(ch) || 0)+1);
        }
        for(const ch of s){
            if(frequency.get(ch)==1) return ch;
        }
        
        return -1;
    }
}