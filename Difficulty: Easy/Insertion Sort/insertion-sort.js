/**
 *
 * insert
 * @param {number[]} arr
 * @param {number} i
 *
 * insertionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {

    // Perform in-place insertion sort
    insertionSort(arr) {
        const n = arr.length;

        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;

            // Shift elements greater than key to the right
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }

        return arr;
    }
}
