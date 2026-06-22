class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = {};
        for (let i = 0; i < s.length; ++i) {
            freq[s[i]] = (freq[s[i]] ?? 0) + 1;
            freq[t[i]] = (freq[t[i]] ?? 0) - 1;
        }

        return Object.values(freq).every(v => v === 0);
    }
}
