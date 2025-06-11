/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    findDuplicates(arr) {
        // code here
        let duplicates=[];
        const map=new Map();
        for(let val of arr){
            map.set(val, (map.get(val)||0)+1);
        }
        for(let key of map.keys()){
            if(map.get(key)>1) duplicates.push(key);
        }
        if(duplicates.length>0) return duplicates;
        return [];
    }
}