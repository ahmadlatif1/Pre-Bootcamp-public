function scaleArray(arr,num){
        for(i=0;i<arr.length;i++){
        arr[i]*=num
    }
    return arr

}
console.log(scaleArray([1,2,3,4,5,6,7],4))