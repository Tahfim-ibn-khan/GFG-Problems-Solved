/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    majorityElement(arr) {
        // code here
        let map=new Map();
        for(let val of arr){
            map.set(val,(map.get(val)||0)+1);
        }
        let size=arr.length/2;
        for(let [key,value] of map.entries()){
            if(value>size){
                return key;
            }
        }
        return -1;
    }
}