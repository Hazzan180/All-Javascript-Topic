//toLocalString() = returns a string with a language 
//                  sensitive represention of this number

// number.toLocalString(local, {options})

//'local' = specify that language (undefined = default set in browser)
//'options' = object with formatting options


//let myNum = 123456.789

let myNum = 100

//myNum = myNum.toLocaleString("en-us") //US English
//myNum = myNum.toLocaleString("hi-in") //Hindi
//myNum = myNum.toLocaleString("de-De") //standard german


//myNum = myNum.toLocaleString("en-us", {style: "currency", currency:"USD"}) //US English
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency:"INR"}) //Hindi
//myNum = myNum.toLocaleString("de-De", {style: "currency", currency:"eur"}) //standard german

//myNum = myNum.toLocaleString(undefined, {style: "percent"}) //percent

myNum = myNum.toLocaleString(undefined, {style: "unit", unit:"celsius"}) //selsius

console.log(myNum)