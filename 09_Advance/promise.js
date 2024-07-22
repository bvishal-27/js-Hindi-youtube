const  promiseOne= new Promise(function(resolve,reject){
    //Do an Async task
    // DB calls , crypto network
    setTimeout(function(){
        console.log('async task completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise is completted");
})

/// ************ type 2.  :-> here  Promise(f(r,r){}).then(f(){}) 👈 immidetely we can use 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 done here");
        resolve()
    },1000)
}).then(function(){
    console.log("taskm completed");
})
//********** type 3 here in resolve we pass value it will return by then   i.e function(ans).   after log of this ans   resolve willl give values */

const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
       
        resolve({ user: "B Vishal", email: "bv@gmail.com"})
},1000)
})
PromiseThree.then(function(answer ){
console.log(answer);
})
