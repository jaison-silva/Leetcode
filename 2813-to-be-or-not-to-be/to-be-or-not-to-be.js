/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe :function(next){
           if (val === next) return true
            throw new Error("Not Equal")
        },
        notToBe: function(next){
            if(val!==next){
                return true
            }else{
                throw new Error("Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */