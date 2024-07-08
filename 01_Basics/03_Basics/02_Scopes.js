//let var const

let c=100
  

// outside  is Global Scope⬆️ 
/// inside if ---> Block scope ⬇️
if(true){
    let  a=200;
    let b= 250;
    c=10;
   // console.log ("Inner :" ,c);
}
//console.log(c)

//*************************** Nested Functions *******************
function one(){
    username = " B Vishal";

    function two(){
        website = "  You Tube"
        console.log(username);
    }
    //console. log(website);
    two()
}
one() 

//+++++++++++++++++++ Interesting ++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num+1
}
//---------> 6


 //decleration before acccess. so not getting but above can access
const addTwo =function (num){
    return num +2
}