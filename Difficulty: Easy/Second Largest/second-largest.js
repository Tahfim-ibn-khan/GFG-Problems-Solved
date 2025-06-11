class Solution {
    getSecondLargest(arr) {
        // code here
        arr= arr.sort((a,b)=>b-a);
        const unique=new Set(arr);
        if(unique.size<=1){
            return -1;
        }
        let counter=0;
        for(const val of unique){
            counter+=1;
            if(counter==2) return val;
        }
    }
}