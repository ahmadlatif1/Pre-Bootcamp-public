function whatHappensToday(){
    chance= Math.random() *100

    if(chance<=10){
        console.log("volcano")
    }else
    
    if(chance>10&&chance<=25){
        console.log("tsunami")
    }else
    
    if(chance>25&&chance<=45){
        console.log("earthquake")
    }else
    if(chance>45&&chance<=70){
        console.log("blizzard")
    }else
    if(chance>70&&chance<=100){
        console.log("meteor")
    }
}
whatHappensToday()