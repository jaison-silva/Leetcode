function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const initial : number = n
    const length: number = flowerbed.length

    if(length==1 && flowerbed[0]==0){
        flowerbed[0]=1
        n--
    }

    if(length>=2 && flowerbed[0]==0 && flowerbed[1]==0 ){
        flowerbed[0]=1
        n--
    }

    if(length>=2 && flowerbed[length-1]==0 && flowerbed[length-2]==0){
        flowerbed[length-1]=1
        n--
    }

    for(let i = 0; i<length; i++){
        if(flowerbed[i]==0 && flowerbed[i+1]==0 && flowerbed[i-1]==0){
            flowerbed[i]=1
            n--
        }
    }

    if(n<= 0){
        return true
    }else{
        return false
    }
};