function accurateGrader(grade){
    

    if(grade<60){
        console.log("Score: "+grade+". Grade: F")
    }

    if(grade>=60&&grade<62){
        console.log("Score: "+grade+". Grade: D-")
    }
    if(grade>=63&&grade<68){
        console.log("Score: "+grade+". Grade: D")
    }
    if(grade>=68&&grade<70){
        console.log("Score: "+grade+". Grade: D+")
    }
    
    if(grade>=70&&grade<72){
        console.log("Score: "+grade+". Grade: C-")
    }
    if(grade>=73&&grade<78){
        console.log("Score: "+grade+". Grade: C")
    }
    if(grade>=78&&grade<80){
        console.log("Score: "+grade+". Grade: C+")
    }

    if(grade>=80&&grade<82){
        console.log("Score: "+grade+". Grade: B-")
    }
    if(grade>=83&&grade<88){
        console.log("Score: "+grade+". Grade: B")
    }
    if(grade>=88&&grade<90){
        console.log("Score: "+grade+". Grade: B+")
    }
    
    if(grade>=90&&grade<92){
        console.log("Score: "+grade+". Grade: A-")
    }
    if(grade>=92&&grade<=100){
        console.log("Score: "+grade+". Grade: A")
    }

}
for(i=0;i<=100;i++){
    accurateGrader(i)
}
