/***
 Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

 Note:

 The solution set must not contain duplicate quadruplets.

 Example:

 Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

 A solution set is:
 [
 [-1,  0, 0, 1],
 [-2, -1, 1, 2],
 [-2,  0, 0, 2]
 ]
 */
function noEq(a, b, c, d) {
    return a !== c && a !== d && b !== c && b !== d;
}

function fourSum(nums, target) {
    nums = nums.sort();
    let twoSum = [], ret = [];
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            twoSum.push([nums[i] + nums[j], nums[i], nums[j]]);
        }
    }

    for (let i = 0; i < twoSum.length; ++i) {
        for (let j = i + 1; j < twoSum.length; ++j) {
            if ((twoSum[i][0] + twoSum[j][0]) === target && noEq(twoSum[i][1], twoSum[i][2], twoSum[j][1], twoSum[j][2])) {
                ret.push([twoSum[i][1], twoSum[i][2], twoSum[j][1], twoSum[j][2]]);
            }
        }
    }
    return ret;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));