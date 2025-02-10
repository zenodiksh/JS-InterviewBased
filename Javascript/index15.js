(function iife(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon is necessary
//application is coonection tom  a database
//global scope ke pollution se bachne ke liye iska istemaal krte h 
//immediately invoked function expression(iife)
 
//iife function sbse pehle likha hona chaihe 
(()=>{
    console.log(`DB CONNECTED`);//simple iife
})();
//passing parameter
((name="diego")=>{
    console.log(`DB CONNECTED ${name}`);//simple iife
})();
