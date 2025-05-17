const students = [
    {
      "Name": "Alice",
      "Age": 14,
      "Grade": "9th",
      "City": "Chennai"
    },
    {
      "Name": "Rahul",
      "Age": 15,
      "Grade": "10th",
      "City": "Mumbai"
    },
    {
      "Name": "Meena",
      "Age": 13,
      "Grade": "8th",
      "City": "Bangalore"
    },
    {
      "Name": "John",
      "Age": 14,
      "Grade": "9th",
      "City": "Delhi"
    }
]

const output = students.map((x) =>{
    x.Name =x.Name.toUpperCase();
    x.City=x.City.toUpperCase();
    console.log(x);
    return x;
});

//{13:1, 14:2,  15:1}

const returnValue =students.reduce((acc,curr)=>{
   if(acc[curr.Age]){
    acc[curr.Age]++;
   }
   else{
    acc[curr.Age]=1;
   }
    return acc;
},{});
console.log(returnValue);

//if the   age if greater than 104 the person name will be show;

const output1=students.filter((x)=>{
    return x.Age<14;
}
).map((x)=>{
  return x.Name;
})
console.log(output1);