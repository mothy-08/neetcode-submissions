class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(
            [(p, (target - p) / s) for p, s in zip(position, speed)],
            key=lambda x: x[0],
            reverse=True
        ) 
        res = 0
        t = 0

        for pos, curr_t in cars:
            if t < curr_t:
                res += 1
                t = curr_t

        return res