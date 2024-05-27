/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last digit and iterate backwards
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the current digit is less than 9, just increment it and return the array
            digits[i]++;
            return digits;
        }
        
        // If the current digit is 9, set it to 0
        digits[i] = 0;
    }
    
    // If all digits are 9, we need to add an extra 1 at the beginning
    digits.unshift(1);
    return digits;
};
