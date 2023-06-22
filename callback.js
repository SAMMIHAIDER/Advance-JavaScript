// define Callback Function
//                            is a function (it can be a Anonymous function or Arrow function) 
//                            passed to another function as an argument or parameter



 // define callback synchronous
                                //   it wait for each operations to complete ,after that it execute the next operations
     //example with code 
    //                      function s() {          
    //                         console.log('baluchi');    //  synchronous function
    //                      }
    //                        s()
    //                      console.log('sami');



  // define callback Asynchronous
                                //   it  never wait for each operations to complete ,after that it execute the next operations
     //example with code 
                        //    setTimeout(function () {           //  Asynchronous function
                        //     console.log("Baluchi")
                        //    }, 5000);

                        //    console.log("sami");



// one example of callback function with code without parameter

// function show() {
//     console.log("show function");
// }
// function dollar(callback) {
//     callback();
// }
// dollar(show);


 // two example of callback function with code with parameter

// function show(a) {
//     console.log("show function", a);
    
// }
// function dollar(a,callback) {
//     callback(a);
// }
// dollar(12,show);

// one example of callback function with code with Anonymous function

// function dollar(callback) {
//     const a = 12;
//     callback(a);
// }
// dollar(
//     function show(a) {
//         console.log("show function", a);
        
//     });

// one example of callback function with code with Arrow function if some line code then used parentheses with Arrow function

// function dollar(callback) {
//     const a = 12;
//     callback(a);
// }
// dollar(a => {
//         console.log("show function",a);
        
//     });

//   callback function used (if one line code then used not parentheses with Arrow function)

// function dollar(callback) {
//     const a = 12;
//     callback(a);
// }
// dollar(a =>  console.log("show function",a));
