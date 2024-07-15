//for of


const arr=[1,2,3,4,5]
for (const num of arr) {
  //  console.log(num);
}

 const greeting="Hello world!"
 for (const greet of greeting) {
   // console.log(`Each Character of ${greet}`);   
 }

 //Maps
 const map= new Map();
 map.set ("IND" , "INDIA");
 map.set ("USA" , "America");
 //console.log(map);


 // For of Loop on MAPS
 for (const [key, value] of map) {
    console.log(key, ' :-> ' , value);
 }