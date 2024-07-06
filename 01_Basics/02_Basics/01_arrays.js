const myAry=[0,1,2,3,4,5]
 //   console.log(myAry)
//

// @@@@@@@@@  Array Methods @@@@@@@@@@@@        
    myAry.push(6)       // add 6 to last to array
      //  console.log(myAry)
    myAry.pop()
        //  console.log(myAry) // remove last element from the  array


//           unshift   will add to starting of the array !
   // myAry.unshift(3)
    //   console.log(myAry)

        // indexof()   includes()
    //  console.log(  myAry.includes(9))      //false
     //.  console.log(  myAry.indexOf(4))       // index 5


      // join() convert array to   STrinG
      const newAry = myAry.join()
      //      console. log(myAry); 
       //   console.log(newAry);

///  slice  and splice
console.log("A",myAry)       //original ary.-> A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myAry.slice(1,3)    // staring index 1 to last index exlude 3 
console.log(myn1);    // -> [ 1, 2 ]
console.log("B",myAry) 



//.       splice  will manipulate original array !!!
const myn2=myAry.splice(1,3)            // 1,2,3
console.log("C",myAry)            //C [ 0, 4, 5 ]
console.log(myn2);