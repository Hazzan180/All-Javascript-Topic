//synchronous code = In an ordered sequence.
//                   step-by-step liner instruction
//                   (start now, finish now)


//asynchronous code = out of sequence.
//                    Ex. Access a database
//                        fetch a file
//                        Task that take time
//                        (start now, finish sometime later)

/*
//synchronous code
console.log("START")
console.log("This step is synchronous")
console.log("END")
*/

//asynchronous code
console.log("START")
setTimeout(() => console.log("This step is asynchronous"), 5000)
console.log("END")