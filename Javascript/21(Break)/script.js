//break = breaks out of a loop entirly
//continue = skip an iteration of a loop

/*
for(let i = 1; i <= 20; i += 1){
    if(i == 13){
        break
    }
    console.log(i)
}
*/
for(let i = 20; i > 0; i -= 1){
    if(i == 13){
        continue
    }
    console.log(i)
}