class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const ns = s.length;
        const nt = t.length;
        let res = "";

        if (ns < nt) {
            return res;
        }
        
        const sMap = {};
        const tMap = {};

        for (let i = 0; i < nt; ++i) {
            tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
        }

        let l = 0;
        for (let r = 0; r < ns; ++r) {
            sMap[s[r]] = (sMap[s[r]] ?? 0) + 1;

            if (!this.hasAllChars(sMap, tMap)) {
                continue;
            }

            while (sMap[s[l]] > tMap[s[l]] || !Object.hasOwn(tMap, s[l])) {
                sMap[s[l]]--;
                l++;
            }

            if (res.length === 0 || res.length > r - l + 1) {
                res = s.slice(l, r + 1);
            }
        }
        
        return res;
    }

    hasAllChars(sMap, tMap) {
        for (const [char, freq] of Object.entries(tMap)) {
            if (!Object.hasOwn(sMap, char) || sMap[char] < freq) {
                return false;
            }
        }
        return true;
    }
}
