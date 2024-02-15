/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i; // Return index if target found
        }
    }
    
    // If the target is not found, determine insertion position
    for (let i = 0; i < nums.length; i++) {
        if (nums[0] > nums[nums.length - 1]) {
            // Array is sorted in descending order
            if (target > nums[0]) {
                return 0; // Insert at the beginning
            } else if (target < nums[nums.length - 1]) {
                return nums.length; // Insert at the end
            } else {
                // Find the appropriate position for insertion
                if (nums[i] > target && (i + 1 === nums.length || target >= nums[i + 1])) {
                    return i + 1;
                }
            }
        } else {
            // Array is sorted in ascending order
            if (target < nums[0]) {
                return 0; // Insert at the beginning
            } else if (target > nums[nums.length - 1]) {
                return nums.length; // Insert at the end
            } else {
                // Find the appropriate position for insertion
                if (nums[i] < target && (i + 1 === nums.length || target <= nums[i + 1])) {
                    return i + 1;
                }
            }
        }
    }
};
