/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */

class Solution {
    partition(arr, low, high) {
        // Your code here
        let pivot=arr[high];
        let i=low-1;
        
        for(let j=low;j<high;j++){
            if(arr[j]<pivot){
                i++;
                [arr[i], arr[j]]=[arr[j],arr[i]];
            }
        }
        [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
        return i+1;
    }

    quickSort(arr, low, high) {
        
        // code here
        if(low<high){
            const pi=this.partition(arr,low,high);
            this.quickSort(arr,low, pi-1);
            this.quickSort(arr,pi+1,high);
        }
    }
}