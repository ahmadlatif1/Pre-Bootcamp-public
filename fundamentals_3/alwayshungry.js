function alwaysHungry(arr){
    food=false
    for(i=0;i<arr.length;i++){
        if (arr[i]=="food"){
            console.log("yummy")
            food=true
        }
    }
    if (!food){
        console.log("I'm hungry")
    }
}

alwaysHungry(["nope","nope","nope","nope","nope",])
alwaysHungry(["as","asdsd","food","food","asd","food"])
