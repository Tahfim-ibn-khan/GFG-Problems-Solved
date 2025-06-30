// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
class Solution {
    search(arr, x) {
        // write your code here
        for(let i=0; i<arr.length; i++){
            if(arr[i]===x) return i;
        }
        return -1;
    }
}
