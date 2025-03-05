
function evenOdds(array){

    evenstreak=0
    oddstreak=0
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenstreak++
            oddstreak=0
        } else {
            oddstreak++
            evenstreak=0
        }
        if (oddstreak>=3){console.log("That's odd!")}
        if (evenstreak>=3){console.log("Even more so!")}
    }
        
}
