// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
// var compress = function(chars) {
//     let s = [chars[0]]
//     let count = 1

//     for(let i = 1; i<chars.length; i++){
//         if(s[s.length-1] == chars[i]){
//             count++
//         }else if(count > 1){
//             s.push(count.toString())
//             s.push(chars[i])
//             count = 1
//         }else{
//             s.push(chars[i])
//         }
//     }

//     chars = []

//      for (let i = 0; i < s.length; i++) {
//         chars[i] = s[i];
//     }

//     return chars.length
// };

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = [chars[0]];
    let count = 1;

    for (let i = 1; i < chars.length; i++) {
        if (s[s.length - 1] == chars[i]) {
            count++;
        } else {
            if (count > 1) {
                if(count>9){
                    s.push(...count.toString().split(''))
                }else{
                    s.push(...count.toString());
                }
            }
            s.push(chars[i]);
            count = 1;
        }
    }

    // Ensure the last character count is added if it's greater than 1
    if (count > 1) {
        s.push(...count.toString());
    }

    // Update the original array and return the new length
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    return s.length;  // Return the new length of the compressed array
};
