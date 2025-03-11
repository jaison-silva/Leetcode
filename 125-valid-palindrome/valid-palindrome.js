/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.trim().toLowerCase().split('').filter((char)=>char.charCodeAt(0)<= 122 && char.charCodeAt(0) >= 97 || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57))

    console.log(string)

    return string.join('') == string.reverse().join('')
};