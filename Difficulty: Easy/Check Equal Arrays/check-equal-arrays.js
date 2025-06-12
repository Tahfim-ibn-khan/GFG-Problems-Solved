// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */
class Solution {
    // Function to check if two arrays are equal or not.
    checkEqual(a, b) {
        if(!(a.length==b.length)) return false;
        const map=new Map();
        for(const val of a){
            map.set(val, (map.get(val)||0)+1);
        }
        for(const val of b){
            map.set(val, (map.get(val)||0)-1);
            if(map.get(val)<0) return false;
        }
        return true;
        
    }
}
