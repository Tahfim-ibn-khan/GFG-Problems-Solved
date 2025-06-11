/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {

    thirdLargest(arr) {
        // your code here
        arr= arr.sort((a,b)=>b-a);
        const unique=new Set(arr);
        if(arr.length<=2){
            return -1;
        }
        return arr[2];
        // let counter=0;
        // for(const val of unique){
        //     counter+=1;
        //     if(counter==3) return val;
        // }
        
    }
}