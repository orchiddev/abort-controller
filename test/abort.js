const AbortController = require("../lib/AbortController")

let promise = () => {
    return new Promise((resolve, reject) => {
        let abortController = new AbortController();

        let signal = abortController.signal;
        signal.addEventListener("abort", (err) => {
            reject(new AbortErr)
        })

        setTimeout(() => {
            abortController.abort();
        }, 5000);
    })
}

promise();