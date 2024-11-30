/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr = []
    arr = title.split(' ')

    for(let i =0 ; i<arr.length; i++){
        if(arr[i].length<= 2){
            arr[i] = arr[i].toLowerCase()
        }else{
            // let firstLetter = val[0].toUpperCase()
            let firstLetter =  arr[i][0].toUpperCase()
            // arr[i] = arr[i].toUpperCase()
            arr[i] = arr[i].toLowerCase()
            // arr[i] = arr[i].charAt(0).toUpperCase()
            arr[i] = arr[i].slice(1,100)
            arr[i] = firstLetter + arr[i]
        }
    }

    return arr.join(' ')
};