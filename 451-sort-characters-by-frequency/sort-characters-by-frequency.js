/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let result = ''
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        if (!(obj[s[i]])) {
            // obj[s[i]] = (obj[s[i]] || 0) + 1
                obj[s[i]] = 1
        } else {
            obj[s[i]] += 1
        }
    }

    console.log(obj)

    let sorted = Object.entries(obj).sort((a,b)=>b[1] - a[1])

        console.log(sorted)


    for(const [val,rep] of sorted){
        for(let i = 0 ; i<rep; i++){
            result += val
        }
    }

    console.log(result)

    return result

};