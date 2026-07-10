class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(zip(position, speed), reverse=True)
        fleet = 0
        curr_time = 0
        for x, y in cars:
            time = (target - x) / y
            if time > curr_time:
                fleet += 1
                curr_time = time

        return fleet