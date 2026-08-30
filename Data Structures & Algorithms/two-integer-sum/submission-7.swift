class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var idxToNums: [Int: Int] = [:]

        for i in 0..<nums.count {
            let diff = target - nums[i]
            if let idx = idxToNums[diff] {
                return [idx, i]
            }
            idxToNums[nums[i]] = i
        }
        return []
    }
}
