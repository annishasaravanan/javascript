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
    x.city=x.city.toUpperCase();
    return x;
});