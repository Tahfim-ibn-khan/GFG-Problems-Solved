// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    searchInSorted(arr, k) {
        for(const val of arr){
            if(val==k) return true;
        }
        return false;
    }
}