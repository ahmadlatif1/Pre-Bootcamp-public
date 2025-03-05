function sevenToMost(arr){
    newarr=[]
    for(i=1;i<arr.length;i++){
        newarr[i-1]=arr[i]+7
    }
    return newarr
}
console.log(sevenToMost([2,3,4,5,6]))