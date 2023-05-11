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
//// Calling an API with promise //////

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

customPromise = (URL = ALL_POKEMONS_URL) => {
    let promise = new Promise(function(resolve, reject){
        let req = new XMLHttpRequest()
        req.open("GET", URL)
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response)
            } else {
                reject("There is an Error!")
            }
        }
        req.send()
    })
    return promise
}

customPromise.then(
    (result) => console.log(result),
    (error) => (console.error('Something went wrong', error))
)
