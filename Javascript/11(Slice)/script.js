//slice() extracts a section of string
//        and returns it as a new string,
//        without modifying the original string 

let fullName = "taiwo hazzan";
let firstName;
let lastname;

//firstName = fullName.slice(0, 5)
//lastname = fullName.slice(5)

//let use indexof 
firstName = fullName.slice(0, fullName.indexOf(" "))
lastname = fullName.slice(fullName.indexOf(" ") + 1)


console.log(firstName)
console.log(lastname)