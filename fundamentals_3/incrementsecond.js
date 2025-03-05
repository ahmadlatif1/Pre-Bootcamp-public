function incrementsecond(arr){

    for(i=0;i<arr.length;i++){
        arr[i]+=arr[i]%2
        console.log(arr[i])
    }

    return arr
}

incrementsecond([1,2,3,4,5,6,7,8,9])