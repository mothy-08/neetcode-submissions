class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const s1Map = {}; 

        for (const c of s1) {
            s1Map[c] = (s1Map[c] ?? 0) + 1;
        }

        const n1 = s1.length;
        const n2 = s2.length;
        let l = 0;

        while (l <= n2 - n1) {
            let r = l;
            const s2Map = {};

            while (r < l + n1) {
                if (!Object.hasOwn(s1Map, s2[r])) break;
                s2Map[s2[r]] = (s2Map[s2[r]] ?? 0) + 1;
                r++;
            }
            
            if (this.areObjectsEqual(s1Map, s2Map)) {
                return true;
            }

            l++;
        }

        return false;
    }

    areObjectsEqual(o1, o2) {
        if (Object.keys(o1).length !== Object.keys(o2).length) return false;
        for (const [key, value] of Object.entries(o1)) {
            if (!Object.hasOwn(o2, key) || o2[key] !== value) {
                return false;
            }
        }
        return true;
    }
}
