/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    const l = (moves.match(/L/g) || []).length
    const r = (moves.match(/R/g) || []).length
    const result = (moves.match(/_/g) || []).length

    return Math.abs(l-r)+result
};