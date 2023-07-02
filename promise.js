// 1>  define Promise
//                 Promise mean real world promise such as one man promise to another man


//  promise structure
                     //   1> first of all using (new) keyword and after using (Promise) keyword
                     //   2> second create a function with tow parameter such as (resolve,rejection);
                     //   3> may be simple function or arrow function

// three stages in Promise
                            // 1>  pending
                            // 2>  resolve
                            // 3>  Rejection

  // 1>  pending
                      //   pending  mean waiting time before promise success or failed 

 // 2>  resolve       
                     //  put condition in code (if condition are true then resolve function are automatically call ) ;
                    //  .then() function or keyword are using to get  a value if condition promise true  mean (promise resolve)

   // Some Code                

// using promise with multiple callback function 
                    
//   var promise = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//        resolve('hello world');
//    }, 2000);
// });

//  promise.then(function(data) {
//    console.log(data + ' 1');
// });

// promise.then(function(data) {
//    console.log(data + ' 2');
// });

// promise.then(function(data) {
//    console.log(data + ' 3');
// });


    
 // 3>  Rejection
                    //  put condition in code (if condition are false then rejection function are automatically call ) ;  
                       //  .catch() function or keyword are using to  get a value if condition promise false mean (promise rejection)

 // Example promise 
//                     let proem = new Promise((resolve,rejection)=>{
//                          setTimeout(function () {
//                            resolve("fulfill code");
//                          })
//                     });

//                proem.then((result)=>{    // .then() function or keyword are using to get  a value 2> if not  used .then() its return promise
//                   console.log(result);
//                });   

// 2>  if you want to used a (new promise) in internet explorer you should use this (Q library.) standard way to create a new promise
      //   you should use this

      //   var promise =  Q.Promise(function(resolve, reject) {

      //   });


  // 3>If you use AngularJS, you have to use the ( $q service:)

  // var promise =  $q(function(resolve, reject) {

  // });






// 4>  The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
//      The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data


//   function job() {
//    return 'hello world';
// }

// let prom = new Promise((resolve,reject)=>{
// resolve(job());
// });

// prom.then((result)=>{
//    console.log(result);
// });

