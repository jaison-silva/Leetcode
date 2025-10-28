/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {

    let totalSum = 0

    while (grid[0].length > 0) {

        let biggestInCycle = 0

        for (const row of grid) {

            let biggestInRow = 0

            for (let i = 0; i < row.length; i++) {
                if (row[i] >= biggestInRow) {
                    biggestInRow = row[i]
                }
            }

            // row[row.indexOf(biggestInRow)] = 0
            if(biggestInRow>biggestInCycle) biggestInCycle = biggestInRow
            row.splice((row.indexOf(biggestInRow)), 1)
        }
        totalSum += biggestInCycle
    }

    console.log(grid)
    return totalSum
};