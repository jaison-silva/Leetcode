var TimeLimitedCache = function() {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExist = this.cache.has(key)

    if(this.cache.has(key)){
        clearTimeout(this.cache.get(key).timeout)
    }

    const timeout = setTimeout(()=>{
        this.cache.delete(key)
    },duration)

    this.cache.set(key,{
        value,
        timeout
    })

    return alreadyExist
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        return this.cache.get(key).value
    }else{
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0
    for(let [key] of this.cache.entries()){
        if(key){
            count++
        }
    }
    return count
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */