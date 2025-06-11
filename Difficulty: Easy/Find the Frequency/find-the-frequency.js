/**
 * @param {number[]} arr
 * @param {number} x
 * @returns { number}
 */

class Solution {
    findFrequency(arr, x) {
        const map=new Map();
        
        for(const val of arr){
            map.set(val, (map.get(val)||0)+1);
        }
        if(!map.has(x)) return 0;
        
        return map.get(x);
    }
}