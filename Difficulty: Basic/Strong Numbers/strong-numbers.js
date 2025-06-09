// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    is_StrongNumber(n) {
        let total=0;
        let number=n;
        while(n>0){
            let count=1;
            let val=n%10;
            for(let i = 1; i <= val; i++){
                count*=i;
            }
            total+=count;
            n=Math.floor(n/10);
        }
        if(total==number) return 1;
        
        return 0;
    }
}