// define Promise
//                 Promise mean real world promise such as one man promise to another man

// three stages in Promise
                            // 1>  pending
                            // 2>  resolve
                            // 3>  Rejection

  // 1>  pending
                      //   pending  mean waiting time before promise success or failed 

 // 2>  resolve       
                     //  put condition in code (if condition are true then resolve function are automatically call ) ;
                    //  1>  if condition are true  then we used javascript function then();
    
 // 3>  Rejection
                    //  put condition in code (if condition are false then rejection function are automatically call ) ;  
                       //  1> if condition are false then we used a javascript function catch();

// Example promise 
                //     function prom(){
                //    return new Promise(function(resolve,rejection){
                //       let a = 12 ;
                //       let b = 2;
                //       let c= a/b;
                //       setInterval(()=>{
                //         if (a) {
                //             resolve(`question solve : ${c}`)
                //           }else{
                //             rejection(`question failed`)
                //           }
                //       },9000)
                    
                //     });}

                //     let ful = (result)=>{
                //         console.log(result);
                //     }

                //     let err = (error)=>{
                //         console.log(error);
                //     }
                //    prom(true).then(ful)
                //    prom(false).catch(err)