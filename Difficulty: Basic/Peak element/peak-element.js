/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    peakElement(arr) {
        let index = 0;

        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && i < arr.length - 1) {
                if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                    index = i;
                    break;
                }
            } else if (i === 0) {
                if (arr.length === 1 || arr[i] >= arr[i + 1]) {
                    index = i;
                    break;
                }
            } else if (i === arr.length - 1) {
                if (arr[i] >= arr[i - 1]) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }
}