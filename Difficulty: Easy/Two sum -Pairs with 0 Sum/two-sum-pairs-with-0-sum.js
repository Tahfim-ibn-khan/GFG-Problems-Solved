// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
class Solution {
    getPairs(arr) {
        const seen = new Set();
        const result = new Set();

        for (let num of arr) {
            let target = -num;
            if (seen.has(target)) {
                const pair = [Math.min(num, target), Math.max(num, target)].toString();
                result.add(pair);
            }
            seen.add(num);
        }

        let newArr = Array.from(result)
            .map(str => str.split(',').map(Number))
            .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        return newArr;
    }
}
