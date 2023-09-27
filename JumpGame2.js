// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let options = []
    let jumps = 0
    let index = 0

    if(nums.length - 1 < 1){
        return 0
    }

    while(nums[index]){
        options = nums.slice(index + 1, index + nums[index])
        if(index === 0 && options.length < 1){
            options.push(nums[index+1])
        }

        if(options.length){
        const values = options.map((x, index) => {
            return(
                {
                    value: x + index, 
                    initial: x
                }
            )
        })
    
        const largest = values.reduce((a, b, index) => {
            return({number: Math.max(a.value, b.value), index})
            });

        jumps++
        index = nums.lastIndexOf(options[largest.index],index + nums[index])
        }else{
            return jumps
        }
    }
    return jumps
};

console.log(jump([2,3,1,1,4]))