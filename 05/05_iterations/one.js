//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
       // console.log("5 is number");
    }
   // console.log(element);
    
}
//
 

for (let  i= 1; i <=10; i++) {
   // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`Inner Loop ${j} and Outer loop ${i}`);
       // console.log(i + '*' + j + ' = '  + i*j);
    }
    
}
//loops on  Arrays

let myArray=["apple","ball","cat"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

let myAray = ["flash", "batman", "superman"]
//console.log(myAray.length);
for
(let index = 0; index < myAray. length; index++) {
const element = myAray[index];
//console.log(element);
}
//. ************ BREAK AND CONTINUE


for (let i = 1; i < 20; i++) {
  if(i==5){
  // console.log("Detected 5")
   break;
   
  }
  //console.log(i);
}
for (let i = 1; i < 10; i++) {
  if(i==5){
   //console.log("Detected 5")
   continue;
   
  }
  //console.log(`value of i is ${i}`);
}

//