// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */
class Solution {
    removeCharacters(s) {
        // code here
        let numbers= new Set("0123456789");
        let NumericString="";
        for(let char of s){
            if(numbers.has(char)) NumericString+=char;
        }
        
        return NumericString;
    }
}