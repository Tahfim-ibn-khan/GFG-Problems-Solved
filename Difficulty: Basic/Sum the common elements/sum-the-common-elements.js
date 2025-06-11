/**
 * @param {number} n1
 * @param {number} n2
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
class Solution {
    commonSum(n1, n2, arr1, arr2) {
        const MOD = 1e9 + 7;

        const set1 = new Set(arr1); // unique elements from arr1
        const set2 = new Set(arr2); // unique elements from arr2

        let sum = 0;

        for (let val of set1) {
            if (set2.has(val)) {
                sum = (sum + val) % MOD;
            }
        }

        return sum;
    }
}
