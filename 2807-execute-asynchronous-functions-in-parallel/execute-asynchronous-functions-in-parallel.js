/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((resolve, reject) => {
        const results = []
        let completed = 0

        functions.forEach((fn, index) => {

            fn()
                .then((result) => {
                    completed += 1
                    results[index] = result

                    if (completed == functions.length) {
                        resolve(results)
                    }
                })
                .catch((reason) => {
                    reject(reason)
                })

        })

    })

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */