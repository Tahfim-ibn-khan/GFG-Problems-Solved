// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
    pushZerosToEnd(arr) {
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[count] = arr[i];
                count++;
            }
        }
        while (count < arr.length) {
            arr[count] = 0;
            count++;
        }

        return arr;
    }
}
