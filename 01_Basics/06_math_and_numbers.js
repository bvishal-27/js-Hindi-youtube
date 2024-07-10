const score=400
//console.log(score);
//difference b/w o/p of these two
//400
//[Number: 100]
const balance= new Number(100)
console.log(balance)


//we can convert number to string &. check length
//console.log(balance.toString().length);

// by giving  toFixed  we can get 100.00 like fixacation
//console.log(balance.toFixed(2));


// precesion   it work like rounding off numbers 
//for ex
const otherNum= 123.876;/*1123.876 */
//console.log(otherNum.toPrecision(4));
//ans for  toPrecision(3)123.876 = 124
////ans for  toPrecision(4)123.876 =123.9
//ans for  toPrecision(3) OF 1123.876 = 1.12e+3. 
// BE AWARE OF THIS BCZ ITS CONVERTED 

//100000= 1,00,000. Like this commas method is :-> toLocaleString()& en-IN for indian standard
const onelacks=100000
//console.log(onelacks.toLocaleString('en-IN'))

//*************   Maths ************ b*/

/*
console.log(Math)
console.log(Math.abs(-4))///. abs~ gives absolute value like negative to positive
console.log(Math.round(4.7))// round will give rounding of
console.log(Math.ceil(4.2)); //  above value it takes like 4.2 ~5
console.log(Math.floor(4.3))// below value its provide like  4
console.log(Math.min(2,5,4,6,3)). // minimum
console.log(Math.max(12,34,55,65,55)) // maximum


//// math Random
console.log(Math.random());    //it  will give numbers  between. 0 and 1
console.log((Math.random()*10) +1); ////it  will give numbers  shift answer value  to left 0.1 ,0.2
console.log(Math.floor(Math.random()*10) +1);//   1 added so value=  1-9 value

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
 //  we use.  ( max-min ) for getting value in range and adding 1 to avoid 0 case  and added value MIN bcz minimum this much value we must need
*/