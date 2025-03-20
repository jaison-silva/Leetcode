/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let data1 = undefined
    let data2 = undefined

    data1 = await promise1
    data2 = await promise2

    return new Promise((resolve,reject)=>{
        resolve(data1+data2)
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */