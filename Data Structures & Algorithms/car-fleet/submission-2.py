class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        coordinates = [(p, s) for p, s in zip(position, speed)]
        coordinates.sort(key=lambda x: -x[0])

        stack = []
        for x, y in coordinates:
            time = (target - x) / y
            stack.append(time)
            if len(stack) > 1 and stack[-1] <= stack[-2]:
                stack.pop()
        
        print(stack)

        return len(stack)