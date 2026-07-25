class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(
            [(p, (target - p) / s) for p, s in zip(position, speed)],
            key=lambda x: x[0],
            reverse=True
        ) 

        stack = []
        for pos, curr_t in cars:
            stack.append(curr_t)
            if len(stack) > 1 and stack[-1] <= stack[-2]:
                stack.pop()

        return len(stack)