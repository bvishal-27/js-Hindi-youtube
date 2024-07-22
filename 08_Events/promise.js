const  promiseOne= new Promise(function(resolve,reject){
    //Do an Async task
    // DB calls , crypto network
    setTimeout(function(){
        console.log('async task completed');
    },1000)
})
promiseOne.then(function(){
    console.log("Promise is completted");
})