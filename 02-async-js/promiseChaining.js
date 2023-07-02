function waitSecond(){
    function delay(ms){
        return new Promise(resolve=>setTimeout(resolve,ms))
    }
    function waitOneSecond(){
        return delay(1000)
    }
    function waitTwoSecond(){
        return delay(2000)
    }
    function waitThreeSecond(){
        return delay(3000)
    }
    function calculateTime(){
        const start = Date.now()
        waitOneSecond()
        .then(
            ()=>waitTwoSecond()
        )
        .then(
            ()=>waitThreeSecond()
        ).
        then(
            ()=>{
                const endTime = Date.now()
                console.log("Time taken : ",(endTime-start)/1000,"seconds");
            }
        )
    }
    calculateTime()
}

waitSecond()