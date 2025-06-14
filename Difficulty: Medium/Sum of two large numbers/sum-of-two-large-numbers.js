// User function Template for javascript

/**
 * @param {string} X
 * @param {string} Y
 * @return {string}
 */

class Solution {
    findSum(s1, s2) {
    // Ensures s1 is the longer string
    if (s2.length > s1.length) [s1, s2] = [s2, s1];

    let res = "";
    let carry = 0;
    let n1 = s1.length, n2 = s2.length;

    for (let i = 0; i < n1; i++) {
        let digit1 = parseInt(s1[n1 - 1 - i]) || 0;
        let digit2 = parseInt(s2[n2 - 1 - i]) || 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        res = (sum % 10) + res;
    }

    if (carry) res = carry + res;

    return res.replace(/^0+/, '') || "0";
}
}
