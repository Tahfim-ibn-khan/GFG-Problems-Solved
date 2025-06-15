// User function Template for C++

class Solution {
  public:
    string findString(int n, int k) {
        unordered_set<string> seen;
        string ans;
        string start(n - 1, '0');

        function<void(string)> dfs = [&](string node) {
            for (int i = 0; i < k; ++i) {
                string edge = node + char('0' + i);
                if (!seen.count(edge)) {
                    seen.insert(edge);
                    dfs(edge.substr(1));
                    ans += char('0' + i);
                }
            }
        };

        dfs(start);
        reverse(ans.begin(), ans.end());
        return start + ans;
    }
};
