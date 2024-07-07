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



   function loginUser(username = "sam"){
    if(!username){                              //(!usernsme ~ to usernsme===Undefined )
        console. log("PLease enter a user"); 
        return
    }
    return `${username} just logged in`
    
        
   }
   console.log(loginUser("B Vishal"));
   //console.log(loginUser(""));