//if
/*
if(2=="2"){
   // console.log ("executed" ) ;
}
const temprature=41;
if(temprature<50){
   // console.log("temp is less than 50");
}else{
//console.log("temp is greater than 50");
}
*/
//dont write single line👇🏻
 //const balance =1000
 //if(balance>500) console.log("test");

/*
const balance =1000
 if (balance<500){
    console.log("less than");
 }else if(balance<750){
    console.log("less than 750");
 }
 else if(balance<900){
    console.log("less than 750");
 }
 else{
    console.log("less than 1200");
 }


 */

 const userLoggedIn=true
 const debitCard= true
const loggedInFromGoogle=false
const loggedInFromEmail=true
// both need to be true
 if(userLoggedIn  && debitCard && 2==2) {
    console.log("Allow to purchase");
 }

 // any one to be true.   from OR ||
 if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User logged in");
 }