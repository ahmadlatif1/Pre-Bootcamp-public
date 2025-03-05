function previousLengths(arr){

    for(i=arr.length;i>0;i--){
        arr[i]=arr[i-1].length
    }
    arr[0]=0
    
    return arr

}

console.log(previousLengths(["aaa","bb","c","asdas","asg","ds"]))