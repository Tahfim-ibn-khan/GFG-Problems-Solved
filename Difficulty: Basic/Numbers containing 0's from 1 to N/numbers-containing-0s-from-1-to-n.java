// User function Template for Java
import java.util.*;

class Solution {
    public int CountNo(int N) {
        int count=0;
        for(int i=1;i<=N;i++){
            int temp=i;
            while(temp>0){
                int val=temp%10;
                if(val==0){
                    count++;
                    break;
                }
                temp=temp/10;
            }
        }
        return count;
    }
}