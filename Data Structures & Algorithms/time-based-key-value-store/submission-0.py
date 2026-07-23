class TimeMap:
    def __init__(self):
        self.keys = {} # key: [(val, t)]

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.keys:
            self.keys[key] = [] 
        self.keys[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        res = ""
        values = self.keys.get(key, [])
        l = 0
        r = len(values) - 1

        while l <= r:
            m = l + (r - l) // 2
            current_timestamp = values[m][1]

            if (current_timestamp <= timestamp):
                res = values[m][0]
                l = m + 1
            else:
                r = m - 1

        return res
        
