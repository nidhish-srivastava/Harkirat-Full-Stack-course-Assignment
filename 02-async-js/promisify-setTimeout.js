
// resolving a prmise after 1s(by passing it inside setTimeout)
function wait(n) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Resolved"
            resolve(data)
        }, n)
    })
    return promise
}

// Then handling the promise using .then 
wait(1000).then(data => console.log(data))