/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let occur = 0
    nums.forEach((value,index)=>{
        if(value === val){
            nums[index] = _
            occur+= 1
        }
    })
    console.log( nums.length - occur)
    nums = nums.sort((a, b) => {
            console.log("Comparing:", a.toString(), "and", b.toString());
            if (typeof a === "number" && typeof b === "number") return a - b;
            if (typeof a === "number") return -1;
            if (typeof b === "number") return 1;
        return 0;
    });
    return nums.length - occur
};

let nums = [3, "_", "0", "_", "6", "1", "_", "5"]

console.log(removeElement(nums), nums)