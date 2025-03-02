function countdown(param1,param2,param3,param4){

    let i = param1;
    while ( i<param3){
        if(i!=param4){

            if(i%param1==0&&i>param2){
                console.log(i)

            }

        }
        i+=param1
    }


}
countdown(3,5,17,9)