class Solution {
    isSumString(s) {
        const isValid = (num) => !(num.length > 1 && num[0] === '0');

        const check = (a, b, rest) => {
            let sum = (BigInt(a) + BigInt(b)).toString();
            if (!rest.startsWith(sum)) return false;
            if (rest === sum) return true;
            return check(b, sum, rest.slice(sum.length));
        };

        let n = s.length;
        for (let i = 1; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let a = s.slice(0, i);
                let b = s.slice(i, j);
                let rest = s.slice(j);

                if (isValid(a) && isValid(b) && check(a, b, rest)) {
                    return true;
                }
            }
        }

        return false;
    }
}
