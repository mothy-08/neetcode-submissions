class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        let n = nums.count
        var res = Array(repeating: 1, count: n)

        var pre = 1
        for i in 0..<n {
            res[i] = pre
            pre *= nums[i]
        }

        var post = 1
        var i = n - 1

        while i >= 0 {
            res[i] *= post
            post *= nums[i]
            i -= 1
        }

        return res
    }
}
