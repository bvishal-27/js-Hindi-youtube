const name=" B Vishal"
const repoCount=7
console.log( name+repoCount)
// instead of using double codes be using ``${}.  
console.log(`my name is ${name}  and my number is ${repoCount} `);

// slice used for -ve  value
console.log(name.charAt(6))

///trim
//trim is use to remove extra spaces 

const   newString = "       B Vishal    "
const abcs= "     B Vishal    "
     console.log(newString)
     console.log(abcs.trim())

     ///replace

     // variable name  + replace + ( whAT TO REPLACE WITH NEW ONE)
     const url ="https://google.dom"
     console.log(url.replace('d','c'))
     console.log(url.includes('google'))
     