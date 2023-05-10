// An event loop is something that pulls stuff out of the queue and places it onto the function execution
// stack whenever the function stack becomes empty.

// Simple loop which will push the console log event into the stack
[1,2,3].forEach(e => {console.log(e)})

// This function will wait into the webApi and push into the queue afterwards it will wait 
// until the stack is empty and console log the elements 
function delayStack(){
    [1,2,3].forEach(e => {
        setTimeout(console.log('Element', e), 3000)
    })
}

delayStack()

console.log('End')

// Expected Output
// 1 2 3 End 1 2 3
