/**
 * @param {string} str
 * @returns {void}
 */

class Solution {
    checkString(str) {
        let v = 0;
        let c = 0;
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        for (let ch of str.toLowerCase()) {
            if (ch >= 'a' && ch <= 'z') {
                if (vowels.has(ch)) {
                    v++;
                } else {
                    c++;
                }
            }
        }

        if (v > c)
            console.log("Yes");
        else if (c > v)
            console.log("No");
        else
            console.log("Same");
    }
}
