//Promise = object that encapsulates the result of an asynchronous operation
//          let asynchronous methods return values like synchronous methods
//          "I promise to return somthing in the future"

const promise = new Promise((resolve, reject) => {
    let fileLoaded = TextTrackCue

    if(fileLoaded){
        resolve("File loaded")
    }else{
        reject("File NOT loaded")
    }
})

promise.then(value => console.log(value))

