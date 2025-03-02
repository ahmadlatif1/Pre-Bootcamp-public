function makeItBig(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>0){
            arr[index]="big"
        }
        
    }
    return(arr)
}
console.log(makeItBig([1,2,3,4,-1,-8,9]))