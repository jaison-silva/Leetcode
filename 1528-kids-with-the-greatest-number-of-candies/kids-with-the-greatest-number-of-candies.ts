function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let currVal: number
    let flag: boolean = true
    let result: boolean[] = []
    for (let i = 0; i < candies.length; i++) {
        currVal = candies[i] + extraCandies
        for (let val of candies) {
            if (!(currVal >= val)) {
                flag = false
            }
        }
        result[i] = flag
        flag = true
    }

    return result
};