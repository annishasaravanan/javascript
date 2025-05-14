const arr=[1,3,2,6,5];

const max=arr.reduce(function(acc,curr){
    if(acc>curr){
        return acc;
    }
    else{
        return curr;
    }
});max;
console.log(max);