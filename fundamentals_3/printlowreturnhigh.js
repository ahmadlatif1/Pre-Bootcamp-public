function printlowreturnhigh(array){
    let high=array[1]
    let low=array[1]
    for (let i = 0; i < array.length; i++) {
        if (array[i]>high){high=array[i]}
        if (array[i]<low){low=array[i]}
        
    }
    console.log(low)
    return(high)
}
console.log(printlowreturnhigh([1,141,123,2,3]))