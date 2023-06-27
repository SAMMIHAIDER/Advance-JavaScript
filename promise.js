// define Promise
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
