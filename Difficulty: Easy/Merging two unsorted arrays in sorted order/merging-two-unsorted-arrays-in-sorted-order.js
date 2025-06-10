// User function Template for javascript
class Solution {
    sortedMerge(arr1, arr2, res) {
        // Merge both arrays
        let merged = [...arr1, ...arr2];

        // Sort the merged array in ascending order
        merged.sort((a, b) => a - b);

        for (let i = 0; i < merged.length; i++) {
            res[i] = merged[i];
        }
    }
}
