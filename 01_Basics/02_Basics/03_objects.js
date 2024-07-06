// singleton
//object literals
//object.create -> through    singleton bantan hai  iy=ts constructor method

//

const JsUser = {
   "full name": " B Vishal Bhangare",
    age:23,
    location:" Bangalore",
    email : "bv27@gmail.com",
    isLoggedIn:false,
    lastLogInDay:["Monday",  "Friday"]

}

console.log(JsUser.name)
//access object by   .(dot) console.log(JsUser.name)
// another by [] square notation [" "]
console.log(JsUser["full name"]);


/*
// Symbol define  create object and value print
// syntax 👇🏻
const mySymbol= Symbol("Key1")
const abc={
    [mySymbol]:"myKey Value is 1"
}
console.log(abc[mySymbol])
*/
// freezz by.  -> Object.freez 
JsUser.email = "bv27@gmail.com"
//Object. freeze (JsUser)
JsUser. email = "bv27@gmail.com"
console.log(JsUser);

 //***** Functions */
 