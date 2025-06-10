/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
    isBalanced(s) {
        const stack = [];
        const match = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let ch of s) {
            if (ch === '(' || ch === '[' || ch === '{') {
                stack.push(ch);
            } else if (ch === ')' || ch === ']' || ch === '}') {
                if (stack.length === 0 || stack.pop() !== match[ch]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
