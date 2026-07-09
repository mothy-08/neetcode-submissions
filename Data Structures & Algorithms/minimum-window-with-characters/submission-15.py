class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""

        sMap = {}
        tMap = {}

        for i, c in enumerate(t):
            tMap[c] = tMap.get(c, 0) + 1

        l = 0
        required = len(tMap)
        formed = 0
        best_l, best_r = 0, -1

        for r in range(len(s)):
            c = s[r]
            sMap[c] = sMap.get(c, 0) + 1

            if c in tMap and sMap[c] == tMap[c]:
                formed += 1
            
            while formed == required:
                if best_r == -1 or best_r - best_l > r - l:
                    best_l, best_r = l, r

                sMap[s[l]] -= 1

                if s[l] in tMap and sMap[s[l]] < tMap[s[l]]:
                    formed -= 1
                    
                l += 1

        return "" if best_r == -1 else s[best_l:best_r + 1]