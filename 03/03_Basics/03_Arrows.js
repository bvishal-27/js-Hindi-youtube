//0bject
/*
const user={
    username: " B Vishal",
    price : 999,
    welcomeessage: function(){
       // console.log( `${this.username},welcome to website`);
        //console.log(this)
    }
}
    */
//user.welcomeessage()
//user.username="sam"
// user.welcomeessage()
//console.log(this.username)


  // ------------ function decleration --------------

  
//function chai(){
//    console.log(this);
//}
//chai()


//-----------------


/*
const chai =function (){
    let username = "B Vishal"
    console. log(this.username);
}
chai()


*/

// ------> undefined  <---------output☝🏻⬇️


// ---------------- Arrow Function ---------------//↣

////.        syntax.       ()=>{}

/*
const chai = ()=>{
    let username = "B Vishal"
    console. log(this.username);
}
chai()

*/

//type 
/*
const addTwo =(num1,num2)=>{
    return num1+num2
}
 console.log( addTwo(3,4))

*/

//type
/*

 const adTwo=(n1,n2) => (n1+n2)
 console.log(adTwo(6,6))
 
 */


 // object return type
 /*
 
 const adTwo=(n1,n2) => ({username : "B Vishal"})
 
 console.log(adTwo(6,6))

 //-> output { username: 'B Vishal' }

 */

 //****************** IIFE *******************
 /*
  function immediately got executed and
 -----> due to polution of global scope  decleration  so thaats removal purpose we used    IIFE 
 */
 // immediately, invoked function expression.  --->()();👍 semicolon ;

 /*
 (function chai(){
 // named iife
    console.log('DB Connected');
 })();
 //chai()

 ( function aurcode(){
    console.log('DB Connected two');
 })();
 */
///

( () =>{
    //un-named iife
    console.log('DB Connected three');
})();


( (name)=>{
    console.log(`DB connected to${name}  , `);
})("Vishal");

// iife with parameter👍

