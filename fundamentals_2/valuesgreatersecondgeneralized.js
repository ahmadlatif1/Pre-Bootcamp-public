function greaterthansecond(arr){
    count=0
    for(let i=0;i<arr.length;i++){
        if (arr[i]>arr[1]){count++}
    }
    console.log(count)
    return(count)
}

greaterthansecond([1,3,4,5,6,7,13])