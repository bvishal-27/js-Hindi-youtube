let myDate= new Date();
//console.log(myDate)// it canot give properly
//   console.log(myDate.toDateString()). // op-> Fri Jul 05 2024
//   console.log(myDate.toISOString()).  //. 2024-07-05T16:37:08.402Z
//  console.log(myDate.toJSON())//output -> 2024-07-05T16:38:33.615Z
//  console.log(myDate.toLocaleDateString())//o/p->7/5/2024
//  console.log(myDate.toLocaleString())//->7/5/2024, 4:41:02 PM
//    let myCreatedDate= new Date(2024 , 6, 5)  //-> month start from 0
//   console.log(myCreatedDate.toDateString())    // o/p Fri Jul 05 2024

let myCreateDate= new Date("07-05-2024")
//  console.log(myCreateDate.toLocaleDateString()); //// ->  7/5/2024

// ********** Time Stamp  *******************//

let myTimeStamp= Date.now();    
//    console.log(myTimeStamp);
//    console.log(myCreateDate.getTime());  //to compare getTime()

    // INTERVIEW Q. to conver into seconds. divide by 1000 use math.floor
//    console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//     console.log(newDate.getMonth()+1);//+1 bcz mont start from zer0
 //    console.log(newDate.getDay());
        //`${newDate.getDay())}`

//.   contro sspace
        newDate.toLocaleString('default',{
            weekday : "long"
           
            
        });