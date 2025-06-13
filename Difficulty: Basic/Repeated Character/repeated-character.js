// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    firstRep(s) {
        let map=new Map();
        for(let ch of s){
            map.set(ch,(map.get(ch)||0)+1);
        }
        for(let [key, value] of map.entries()){
            if(value>1) return key;
        }
        return -1;
    }
}
