// User function Template for javascript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    convert(s) {
    let result="";
    let count=-1;
    for(let ch of s){
        if(ch==' '){
            count=1;
        }
        else if((count==1) || (count==-1)){
            ch=String.fromCharCode(ch.charCodeAt(0)-32);
            count=0;
        }
        result+=ch;
    }
    return result;
    }
}
