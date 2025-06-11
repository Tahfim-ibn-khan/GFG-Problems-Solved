// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    isSubset(a, b) {
        // const setA=new Set(a);
        // const setB=new Set(b);
        
        // for(let val of setB){
        //     if(!setA.has(val)) return false;
        // }
        
        // return true;
        const map=new Map;
        
        for(const num of a){
            map.set(num, (map.get(num) || 0)+1)
        }
        
        for(const num of b){
            if(map.has(num)){
                map.set(num, map.get(num)-1);
            }
            else{
                map.set(num, -1);
            }
        }
        
        for(const val of map.values()){
            if(val<0) return false;
        }
        return true;
    }
}