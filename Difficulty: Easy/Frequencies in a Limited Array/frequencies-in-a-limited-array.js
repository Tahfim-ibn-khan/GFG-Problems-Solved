// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to count the frequency of all elements from 1 to N in the array.
    frequencyCount(arr) {
        // code here
        let size=[];
        let map=new Map();
        for(let i=1;i<=arr.length;i++){
            map.set(i,0);
        }
        for(let val of arr){
            if(map.has(val)){
                map.set(val, map.get(val)+1)
            }
        }
        for(let val of map.values()){
            size.push(val);
        }
        return size;
    }
}