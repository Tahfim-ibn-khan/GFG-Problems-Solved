class Solution {
    findMedian(arr) {
        arr=arr.sort((a,b)=>a-b)
        let n=arr.length;
        if(n%2!=0){
            return arr[(n+1)/2-1];
        }
        let avg=(arr[n/2-1]+arr[n/2+1-1])/2;
        
        return avg;
    }
}
