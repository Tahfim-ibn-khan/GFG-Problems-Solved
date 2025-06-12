/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
class Solution {
    findUnion(a, b) {
        // code here
        let union=[...a,...b];
        const checker=new Set(union);
        return checker.size;
    }
}
