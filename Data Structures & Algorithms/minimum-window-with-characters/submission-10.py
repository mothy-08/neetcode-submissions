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
        res_len = float('inf')
        res = [-1, -1]

        for r in range(len(s)):
            c = s[r]
            sMap[c] = sMap.get(c, 0) + 1

            if c in tMap and sMap[c] == tMap[c]:
                formed += 1
            
            while formed == required:
                if res_len > r - l + 1:
                    res_len = r - l + 1;
                    res = [l, r]

                sMap[s[l]] -= 1

                if s[l] in tMap and sMap[s[l]] < tMap[s[l]]:
                    formed -= 1
                    
                l += 1

        return "" if res == float("inf") else s[res[0]: res[1] + 1]