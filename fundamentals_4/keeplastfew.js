function keeplastfew(arr,n){
    if(n>arr.length)return;

    newarr=[]
    for(i=arr.length-n;i<arr.length;i++){
        newarr.push(arr[i])
    }
    return newarr

}
console.log(keeplastfew([2,4,6,8,10],3))