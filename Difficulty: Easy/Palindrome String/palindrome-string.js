/**
 * @param {string} s
 * @return {boolean}
 */

class Solution {
    // Function to check if a given string is a palindrome.
    isPalindrome(s) {
        let left=0;
        let right=s.length-1;
        while(left<right){
            if(!(s[left]==s[right])) return false;
            left++;
            right--;
        }
        return true;
    }
}