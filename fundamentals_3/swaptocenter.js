function swapToCenter(arr){
    if(arr.length<3)return;
    
    for(i=0;i<arr.length/2;i++){
        if (i%2==0){
            tmp=arr[i]
            arr[i]=arr[arr.length-1-i]
            arr[arr.length-1-i]=tmp
        }
    }
    return arr
    
}

console.log(swapToCenter([1,2,3,4,5,6]))