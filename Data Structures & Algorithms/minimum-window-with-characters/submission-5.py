class Solution:
    def minWindow(self, s: str, t: str) -> str:
        ns = len(s)
        nt = len(t)
        res = ""

        if ns < nt: return res

        sMap = {}
        tMap = {}

        for i, c in enumerate(t):
            tMap[c] = tMap.get(c, 0) + 1

        
        l = 0
        required = len(tMap)
        formed = 0
        for r in range(ns):
            c = s[r]
            sMap[c] = sMap.get(c, 0) + 1

            if c in tMap and sMap[c] == tMap[c]:
                formed += 1
            
            while formed == required:
                if not res or len(res) > r - l + 1:
                    res = s[l:r + 1]

                sMap[s[l]] -= 1

                if s[l] in tMap and sMap[s[l]] < tMap[s[l]]:
                    formed -= 1
                    
                l += 1

        return res