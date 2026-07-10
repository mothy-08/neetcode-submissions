class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(zip(position, speed), reverse=True)
        res = 0
        t = 0
        for x, y in cars:
            curr_t = (target - x) / y
            if t < curr_t: 
                res += 1
                t = curr_t

        return res