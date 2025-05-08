/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timerID
    return function (...args) {
        if(timerID){
            clearTimeout(timerID)
        }
        timerID = setTimeout(()=>{
            return fn(...args)
        },t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */