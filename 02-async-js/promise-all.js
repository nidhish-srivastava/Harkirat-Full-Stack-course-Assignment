
// Create 3 promises,resolve them after 1 second delay,then handleAllThe Promises together
// Calculate the time for this Promise.all shit,
function waitOneSecond() {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function waitOneSecond() {
        return delay(1000);
    }

    function waitTwoSecond() {
        return delay(2000);
    }

    function waitThreeSecond() {
        return delay(3000);
    }

    async function calculateTime() {
        const start = Date.now()
        return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
            const endTime = Date.now();
            const totalTime = endTime - start;
            console.log(`All promises resolved in ${totalTime} milliseconds.`)
        })
    }
    calculateTime()
}

waitOneSecond()