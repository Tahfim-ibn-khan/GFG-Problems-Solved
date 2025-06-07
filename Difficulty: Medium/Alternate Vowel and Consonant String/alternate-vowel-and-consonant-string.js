class Solution {
    /**
     * @param {string} S
     * @param {number} N
     * @returns {string}
     */
    rearrange(S, N) {
        const isVowel = (ch) => 'aeiou'.includes(ch);

        let vowelCount = new Array(26).fill(0);
        let consCount = new Array(26).fill(0);
        let vTotal = 0, cTotal = 0;

        // Count characters
        for (let ch of S) {
            let idx = ch.charCodeAt(0) - 97;
            if (isVowel(ch)) {
                vowelCount[idx]++;
                vTotal++;
            } else {
                consCount[idx]++;
                cTotal++;
            }
        }

        if (Math.abs(vTotal - cTotal) > 1) return "-1";

        const construct = (startWithVowel) => {
            let result = [];
            let v = vowelCount.slice();
            let c = consCount.slice();
            let vIdx = 0, cIdx = 0;

            for (let i = 0; i < N; i++) {
                let targetIsVowel = (i % 2 === 0) === startWithVowel;

                if (targetIsVowel) {
                    while (vIdx < 26 && v[vIdx] === 0) vIdx++;
                    if (vIdx === 26) return null;
                    result.push(String.fromCharCode(vIdx + 97));
                    v[vIdx]--;
                } else {
                    while (cIdx < 26 && c[cIdx] === 0) cIdx++;
                    if (cIdx === 26) return null;
                    result.push(String.fromCharCode(cIdx + 97));
                    c[cIdx]--;
                }
            }

            return result.join('');
        };

        let res1 = null, res2 = null;
        if (vTotal >= cTotal) res1 = construct(true);
        if (cTotal >= vTotal) res2 = construct(false);

        if (res1 && res2) return res1 < res2 ? res1 : res2;
        return res1 || res2 || "-1";
    }
}
