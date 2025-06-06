class Solution {
  public:
    int isFactorial(int N) {
        long long fact = 1;
        int i = 1;
        
        while (fact < N) {
            i++;
            fact *= i;
        }
        
        return (fact == N) ? 1 : 0;
    }
};