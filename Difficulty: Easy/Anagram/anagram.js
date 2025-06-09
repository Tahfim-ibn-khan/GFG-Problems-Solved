// User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */

class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        if(s1.length!=s2.length){
            return false;
        }
        let map=new Map();
        for(let char of s1){
            map.set(char, (map.get(char)||0)+1)
        }
        for(let char of s2){
            if(!map.has(char)) return false;
            map.set(char, map.get(char)-1);
            if(map.get(char)<0) return false;
        }
        return true;
    }
}