class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const sMap = new Map();
        const tMap = new Map();


        for (let i = 0; i < s.length; ++i) {
            let freqS = sMap.get(s[i]) ?? 0;
            let freqT = tMap.get(t[i]) ?? 0;

            sMap.set(s[i], freqS + 1);
            tMap.set(t[i], freqT + 1);
        }

        for (const [key, val] of sMap.entries()) {
            if (tMap.get(key) != val) {
                return false;
            }
        }

        return true;
    }
}
