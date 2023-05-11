let promise = new Promise(function(resolve, reject){
    console.log('resolve')
    resolve(10)
})

promise.then(
    (result) => {console.log(result)}
)
/// it will not be called as I am not rejecting the promise
promise.catch(
    (error) => {console.log(error)}
)
