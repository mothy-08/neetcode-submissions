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
        for r in range(ns):
            sMap[s[r]] = sMap.get(s[r], 0) + 1

            if not self.check(sMap, tMap):
                continue

            while s[l] not in tMap or sMap[s[l]] > tMap[s[l]]:
                sMap[s[l]] -= 1
                l += 1
            
            if not res or len(res) > r - l + 1:
                res = s[l:r + 1]

        return res
            
    def check(self, sMap, tMap):
        for c, f in tMap.items():
            if c not in sMap or sMap[c] < f: return False
        return True