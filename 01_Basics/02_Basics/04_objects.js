//  const tinderUser=new Object()       // its singel tone object
 
const tinderUser={}           // non single tone object
tinderUser.name="Sam"
tinderUser.id="123svs"
tinderUser.isloggedIn=false
        //console.log(tinderUser);
 

const appUser={}
appUser.name= "BV"
appUser.id="123asc"
appUser.password="*****"
    //console.log(appUser);


   // using asign we can assign objects

   const obj1={ 1: "Ind", 2 :"Delhi"}//. 1 -> key, "Ind"<- value
   const obj2={ 3: "Karnartaka", 4: "Telengana"}
   const obj3={ 5: " Rajasthan", 6: "Punjab"}
   const obj4={...obj1,...obj2,...obj3}
   // console.log(obj4)



    

  /// +++++.   getting key  & vlues by ->Object.keys()<-  puting object name👍 output is  Array 👈

//    console.log(tinderUser);//{ name: 'Sam', id: '123svs', isloggedIn: false }
//    console.log(Object.keys(tinderUser)); // ->[ 'name', 'id', 'isloggedIn' ]
   
//  console.log(Object.values(tinderUser));//  -> [ 'Sam', '123svs', false ]
 //   console.log(Object.keys(obj4));

/* 
    *
    * 
    * 
    */ 

/*
 /////////   Object De-Structures     here its syntsx ->const {Indian_Primeir_Leaguage:IPL}=cricket
 const   cricket ={
         teams:"8 ",
          playerd:11,
          Indian_Primeir_Leaguage: "t20"
 }
 const {Indian_Primeir_Leaguage:IPL}=cricket
 console.log(IPL);


 */

 /*.  Json Talk
{
   " name" : "B Vishal"
   "Nationality":"Indian"
}
   */
