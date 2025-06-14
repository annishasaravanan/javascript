
//  //true=1,false=0
//  console.log(true +1)//boolean +number =>number//1+1
//  console.log(true +"1");//true->tostring +string->string//"true"+"1"=true1


console.log("1. Start");

setTimeout(function () {
  console.log("3. Timeout callback"); // Goes to Callback Queue
}, 0);

queueMicrotask(() => {
  console.log("2. Microtask"); // Goes to Microtask Queue
});

console.log("4. End");

//setTimeout schedules this callback in the Callback Queue (also called Macrotask Queue) to be run after the current call stack is empty AND after all Microtasks are done.

//This schedules a function into the Microtask Queue. Microtasks are executed right after the main code (synchronous) and before anything in the Callback Queue.