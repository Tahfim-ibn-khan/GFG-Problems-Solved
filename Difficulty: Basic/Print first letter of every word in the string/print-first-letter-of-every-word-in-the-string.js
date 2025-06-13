// User function Template for javascript

/**
 * @param {string} str
 * @returns {str}
 */

class Solution {
    firstAlphabet(str) {
        let count=-1;
        let result='';
        for(let char of str){
            if(char==' '){
                count=1;
            }
            else if((count==-1) || (count==1)){
                result+=char;
                count=0;
            }
        }
        return result;
    }
}
