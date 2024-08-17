/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
   
let result = []
let index = 0
    for(let i of candies){
        
        i += extraCandies
        console.log(i + "this is i of candies")

        for(let j of candies){
                    console.log(j + "this is j of candies")
                    console.log(index + "this is the index")
                  result[index] = true
             if(i < j){
                result[index] = false
                break;
            }
        }
        i -= extraCandies
        index ++
    }
    
    return result
};