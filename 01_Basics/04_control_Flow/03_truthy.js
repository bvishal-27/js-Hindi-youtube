 const userEmail =[]
 if(userEmail){
    console.log("Got use Email");
 }
 else{
    console.log("Dont have user email");
 }
 

 // falsy value 
// false, 0, -0, BigInt 0n  , ""  <-(empty string) ,null , undefined , NaN

//
/*
//truthy values
"0" <- (inside string so ✅), 'false',  " " ,   [] <- empty array , {} <-empty object ,function(){}<-- empty function

*/
//array empty check
if(userEmail.length===0){
    console.log("Array is empty");
}

/*
//object is empty
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
    */


/*
false==0
true

false == ''
true

0 == ''
true
*/

// Nullish Coalescing Operator. (??) : null undefined
let val1;
//val1= 5??10;  //-> 5
//val1= null?? 10.     //->10

//val1 = undefined??15. //->15
console.log(val1);


 // it return first value it got
val1= null ?? 10 ?? 5 ?? 15
console.log(val1);



// Terniary Operator
//condition    ?  true : false
const  teaPrice =100
teaPrice <= 80 ? console.log("less than 80 ") : console.log("More than 80");