function toNegative(arr){
    
    newarr=[]
    for(i=0;i<arr.length;i++){
        newarr[i]=arr[i]*(((arr[i]+"").length-2)*2+1) //the schizophrenic solution
    }
    return newarr

}
console.log(toNegative([1,-2,-3,4,5,-6,7]))