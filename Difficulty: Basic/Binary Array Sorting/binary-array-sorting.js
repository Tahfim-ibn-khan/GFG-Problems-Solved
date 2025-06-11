/**
 * @param {number[]} arr
 * @returns {void}
 */
class Solution {
    binSort(arr) {
        let count0 = 0;

        for (let num of arr) {
            if (num === 0) count0++;
        }

        for (let i = 0; i < count0; i++) {
            arr[i] = 0;
        }
        
        for (let i = count0; i < arr.length; i++) {
            arr[i] = 1;
        }
    }
}
