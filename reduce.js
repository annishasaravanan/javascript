const arr=[5,1,2,3,6];

const sum =arr.reduce(function(acc,curr){
   acc=acc+curr;
   return acc;
});sum;

console.log(sum);