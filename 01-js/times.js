function loop(n){
    let sum = 0
    for(let i=0;i<n;i++){
        sum += i
    }
    return sum
}

const startTime =new Date().getTime()
console.log(loop(10))
const endTime =new Date().getTime()
const timeTaken = endTime - startTime
console.log("Time Taken : ",timeTaken/1000);