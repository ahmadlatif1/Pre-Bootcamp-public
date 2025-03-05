function grader(grade){
    

    if(grade<60){
        console.log("Score: "+grade+". Grade: F")
    }
    if(grade>=60&&grade<70){
        console.log("Score: "+grade+". Grade: D")
    }
    
    if(grade>=70&&grade<80){
        console.log("Score: "+grade+". Grade: C")
    }
    
    if(grade>=80&&grade<90){
        console.log("Score: "+grade+". Grade: B")
    }
    
    if(grade>=90&&grade<=100){
        console.log("Score: "+grade+". Grade: A")
    }

}
for(i=0;i<=100;i++){
    grader(i)
}