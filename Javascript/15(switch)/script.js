//switch = statement that examines a value
//         for a match against many case clauses 
//         more efficient that may "else if " satatements

/*
let grade = "A"

if(grade == "A"){
    console.log("You did great!")
}else if(grade == "B"){
    console.log("You did good!")
}else if(grade == "C"){
    console.log("You did okay!")
}else if(grade == "D"){
    console.log("You passeed barely!")
}else if(grade == "F"){
    console.log("You Failed!")
}else{
    console.log(grade, "is note a leter grade")
}
*/

/*
//let use switch
let grade = "A"

switch(grade){
    case "A":
        console.log("You did great!")
        break;
    case "B":
        console.log("You did good!")
        break;
    case "C":
        console.log("You did okay!")
        break;
    case "D":
        console.log("You passeed barely!")
        break;
    case "F":
        console.log("You Failed!")
        break;
    default:
    console.log(grade, "is note a leter grade")
}
*/

//OR
let grade = 90

switch(true){
    case grade >= 90:
        console.log("You did great!")
        break;
    case grade >= 80:
        console.log("You did good!")
        break;
    case grade >= 70:
        console.log("You did okay!")
        break;
    case grade >= 60:
        console.log("You passeed barely!")
        break;
    case grade >= 50:
        console.log("You Failed!")
        break;
    default:
    console.log(grade, "is note a leter grade")
}