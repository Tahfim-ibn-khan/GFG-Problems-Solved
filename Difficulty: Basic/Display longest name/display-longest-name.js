
class Solution {
    longest(arr) {
        let size=0;
        let result='';
        for(let i of arr){
            if(i.length>size) {
                size=i.length;
                result=i;
            }
        }
        return result;
    }
}