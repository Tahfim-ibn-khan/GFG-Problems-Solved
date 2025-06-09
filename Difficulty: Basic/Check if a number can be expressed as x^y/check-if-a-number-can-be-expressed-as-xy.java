// User function Template for Java
class Solution {
    static int checkPower(int N) {
        if (N == 1) return 1; // 1 = 1^y for any y > 1

        for (int x = 2; x * x <= N; x++) {
            int power = x * x;

            while (power <= N) {
                if (power == N) return 1;
                power *= x;
            }
        }

        return 0;
    }
}
