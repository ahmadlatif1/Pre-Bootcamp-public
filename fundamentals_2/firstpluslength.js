function firstlength(arr){
    length=0
    for(let i=0;i<=arr[1];i++){
        length=i
    }
    return arr[0]+length

}
console.log(firstlength(["a",9]))