// console.log("start");
// function cb()
// {
//     console.log("callback");
// }
// cb();
// setTimeout(cb,0);
// console.log("end");

console.log("start");
setTimeout(function (b)
{
  console.log("callback");
},5000);
console.log("end");