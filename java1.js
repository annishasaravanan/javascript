// // //  console.log(a);
// // // var a = 5;
// // // console.log(a); 


// // var a=10;          
// // console.log(a);  
// // a = 5;
// // console.log(a);  

// // console.log(b);
// // let b = 10;


// let petname="dog";
// greet();
// function greet() {
//     fruit="apple";//considered global variable
//     console.log("my pet name is"+petname);
// }
// console.log(fruit);



// // greet(); 
// // var greet = function () {
// //   console.log("Hi!");
// // };


//  var n=2;
//     function square(num)
//     {
//         var ans=num*num;
//         return ans;
//     }
//     var square2=square(n);
//     var square3=square(3);
//     console.log(square2);


// 

function outer() {
  let outerVar = 'I am outside!';

  function inner() {
    console.log(outerVar); // inner has access to outer's variables
  }
  inner();
}
outer();