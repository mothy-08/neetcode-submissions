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

        if (ns < nt)  return res;

        const sMap = {};
        const tMap = {};

        for (let i = 0; i < nt; ++i) tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;

        const required = Object.keys(tMap).length;
        let formed = 0;
        let l = 0;

        for (let r = 0; r < ns; ++r) {
            const c = s[r];
            sMap[c] = (sMap[c] ?? 0) + 1;

            if (sMap[c] === tMap[c]) {
                formed++;
            }
            
            while (formed === required) {
                if (res.length === 0 || res.length > r - l + 1)  {
                    res = s.slice(l, r + 1);
                }

                sMap[s[l]]--;

                if (sMap[s[l]] < tMap[s[l]]) {
                    formed--;
                }

                l++;
            }
        }

        return res;
    }
}
