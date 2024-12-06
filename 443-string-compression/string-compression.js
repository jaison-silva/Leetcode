/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = [chars[0]];  // Initialize the result array with the first character
    let count = 1;  // Start counting occurrences

    for (let i = 1; i < chars.length; i++) {
        if (s[s.length - 1] === chars[i]) {
            count++;  // Increment count if the current character is the same as the last one
        } else {
            if (count > 1) {
                // If the count is greater than 1, push the count (split into individual digits if > 9)
                s.push(...count.toString().split(''));
            }
            s.push(chars[i]);  // Push the current character
            count = 1;  // Reset count for the new character
        }
    }

    // Ensure the last character count is added if it's greater than 1
    if (count > 1) {
        s.push(...count.toString().split(''));
    }

    // Update the original array and return the new length
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    return s.length;  // Return the new length of the compressed array
};
