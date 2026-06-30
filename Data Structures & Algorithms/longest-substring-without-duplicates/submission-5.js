class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
            res = 0,
            freq = {};

        for (let r = 0; r < s.length; ++r) {
            if (!freq[s[r]]) freq[s[r]] = 0;
            freq[s[r]]++;
            while (freq[s[r]] > 1) {
                freq[s[l]]--;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
