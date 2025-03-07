/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let seconds = 0

    for (let i = 0; i < points.length - 1; i++) {

        while (points[i][0] !== points[i + 1][0] || points[i][1] !== points[i + 1][1]) {

            if (points[i][0] < points[i + 1][0]) {
                points[i][0]++
            } else if (points[i][0] > points[i + 1][0]) {
                points[i][0]--
            }

            if (points[i][1] < points[i + 1][1]) {
                points[i][1]++
            } else if (points[i][1] > points[i + 1][1]) {
                points[i][1]--
            }
            seconds++
        }

    }
    return seconds
}