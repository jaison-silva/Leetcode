function mergeAlternately(word1: string, word2: string): string {

    // function addword1(word1: string): void {
    //     if (counter1 <= word1.length) {
    //         result.push(word1[incrementCount])
    //     }
    // }

    // function addword2(word2: string): void {
    //     if (counter2 <= word2.length) {
    //         result.push(word2[incrementCount])
    //     }
    // }

    let result: string[] = []
    let counter1: number = 0
    let counter2: number = 0

    let toggle: boolean = true
    function toggleFunc(): void {
        if (toggle) {
            // addword1(word1)
            if(counter1 < word1.length){
                result.push(word1[counter1])
            counter1++
            }
        } else {
            // addword2(word2)
             if(counter2 < word2.length){
            result.push(word2[counter2])
            counter2++
             }
        }
        toggle = !toggle
    }

    while (counter1 < word1.length || counter2 < word2.length) {
        toggleFunc()
    }

    return result.join('')
};