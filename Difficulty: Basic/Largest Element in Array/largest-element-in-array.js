class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        let max=arr[0];
        for(let val of arr){
            if(val>max) max=val;
        }
        return max;
    }
}
