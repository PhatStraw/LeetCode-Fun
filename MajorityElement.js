// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = {}
    let leader = 1
    let score = 1
    if(nums.length < 2) return nums[0]
    for(var i=0; i <=nums.length; i++){
        major[nums[i]] ? major[nums[i]] += 1 : major[nums[i]] = 1
        if(major[nums[i]] > nums.length /2 )return nums[i]
    }
    for(const big in major){
        const parsedNum = parseInt(major[big])
        if(score < parsedNum){
            leader = parseInt(big)
            score = parsedNum
        }
    }
    return leader
};

console.log(majorityElement([2,2,1,1,1,2,2])) //should be 2