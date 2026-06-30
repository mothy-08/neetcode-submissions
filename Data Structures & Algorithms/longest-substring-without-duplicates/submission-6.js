class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; ++r) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
