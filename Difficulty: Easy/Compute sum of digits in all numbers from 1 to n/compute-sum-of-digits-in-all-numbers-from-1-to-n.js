// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find sum of digits of a number.
    sumOfDigits(N) {
        let sum = 0;

        for (let i = 1; i <= N; i++) {
            let temp = i;

            while (temp > 0) {
                sum += temp % 10;
                temp = Math.floor(temp / 10);
            }
        }

        return sum;
    }
}
