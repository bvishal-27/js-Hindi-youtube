const coding=["java","python", "c", "JS"]
coding.forEach(function (value){
    //console.log(value);
})

// arrowing
coding.forEach( (item)=>{
   //  console.log(item);
}  )

// function printMe(item){
//     console.log(item) ;}

//     coding.forEach (printMe)

coding.forEach(   (item , index,arr) =>{
    //console.log(item , index,arr);
})
/*
java 0 [ 'java', 'python', 'c', 'JS' ]
python 1 [ 'java', 'python', 'c', 'JS' ]
c 2 [ 'java', 'python', 'c', 'JS' ]
JS 3 [ 'java', 'python', 'c', 'JS' ]
*/
//
const myProgaming=[
    {
        lanuageName:"java",
         languagefile: "java"
    }, 
    {
        lanuageName:"js",
         languagefile: "java Script"
    },
    {
        lanuageName:"python",
         languagefile: "python"
    }
 ]
 myProgaming.forEach((item)=>{
console.log(item.languagefile);
 })
//easily extract by *****myProgaming.forEach((item)=>{console.log(item.languagefile)})
/*.      output  java
java Script
python */ 