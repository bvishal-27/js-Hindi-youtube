// Functions
/*
   function addTwoNumbers( number1,number2){
console.log(number1+number2);
}
addTwoNumbers(5,7)
*/
//  function addTwoNumbers( number1,number2){
  //  return number1+number2;
  //  }
  //   const result= addTwoNumbers(5,7)
   // console.log(result)

/*

   function loginUser(username = "sam"){
    if(!username){                              //(!usernsme ~ to usernsme===Undefined )
        console. log("PLease enter a user"); 
        return
    }
    return `${username} just logged in`
       
   }
   console.log(loginUser("B Vishal"));
   //console.log(loginUser(""));
   */


  //  *********** Business Purpose **********//
  //      REST ->        ... parameter like spread to store 2* value
  function  calculateCarePrice( val1,val2,...num1){
    return num1
  }
 //console.log( calculateCarePrice(200,400,500,800,230,));



/*
//. Arrays into functions
//const myNewArray=[200,600,800,400]
// creating a function, returning second arrray
 
function returnningSecondValue(getnewArray){
   return getnewArray[1]
}
//console.log(returnningSecondValue( myNewArray));  //-> type 1
console.log(returnningSecondValue([200,400,600,800])) //-> type 2
//
*/

 //   Objects into Functions 
 const user={
   user: "B Vishal", 
   price : "199"

 }
 function  handleObjects(AnyObjects){
   console.log(`UserName is ${AnyObjects.user} and price is ${AnyObjects.price}`);
 }
 //handleObjects(user)

 handleObjects({
   user: "sam",
   price: 999
 })


