class Solution {
    removeDuplicate(arr) {
        const unique = [...new Set(arr)];
        return unique;
    }
}
