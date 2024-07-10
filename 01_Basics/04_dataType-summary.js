//primitive
// 7 types  : strings ,number, boolean , null , undefined. ,symbol. ,BigInt

// Reference type   Non rimitive
///. array   objects.  functions
//******************* DATA TYPE *****************
//primitive. // call by value
// 7 types  : strings ,number, boolean , null (empty), undefined. ,symbol. ,BigInt

// Reference type  ( Non rimitive )
///. array   objects.  functions
const score=100
//console.log(typeof score);// -> number
const scoreValue=100.3
//console.log(typeof scoreValue); // -> number
const isLoggedIn=false
//console.log(typeof isLoggedIn);//-> boolean
let Email;
//console.log(typeof Email);  //-> undefined
let email ="bvshal@gmail.com";
//console.log(typeof email); //-> string


const id=Symbol("123");
const anotherId= Symbol("123");
//console.log(id===anotherId)


//BigInt. add last to "n"
const BigNumber=1224546456767689868777867n
//console.log("Good Evening 🍀 B VISHAL")
// Reference type  ( Non rimitive )
// array   objects.  functions(return type  function)

//Array
const heros=[ 'Shaktiman','Hanuman'];

//objects
//key value pairs 👉  key  -> ::::::: value ,,,,,    

let myObj={
    name :'B Vishal',
    age : 22,
}

//function + variable
const myFunction= function(){
    console.log("Hello World");
}
//console.log(typeof myFunction)

//console.log("Read Screen Shot")
//https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++.  Memory. +++++++++++++++++++++++++++
// 2 type   Stack  & Heap memory
//stack (primitive ). Heap (Non primitive)
 //copy.☝🏻               original value we get☝🏻     if                       if change   done immediately apper


 let myYotubeName="B Vishal Bhangare"
 let anotherName=myYotubeName
 anotherName= "Bhangare"
 //console.log(anotherName)
 //console.log(myYotubeName)


 let userOne={
email: "one@gamil",
upi:" 123@"
 }
 let userTwo= userOne;
 userTwo.email="bv123@"
 console.log(userTwo.email)
 console.log(userOne.email)
    



 