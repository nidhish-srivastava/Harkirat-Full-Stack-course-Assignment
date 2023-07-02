function sleep(seconds){
    const start = Date.now()  //* Before starting the loop,we have the currentTime stored inside the start variable
    let count = 0
    while(Date.now()-start<seconds){  
        count++
    }
    console.log(`Within 2seconds of time,loop ran ${count} times`)
}

const start = new Date().getTime()
sleep(2000)
const end =new Date().getTime()
const timeTaken = end-start
console.log("Time Taken",timeTaken/1000);  // IT will take around 2seconds only(Its just that we created setTimeOut type function on our own)