const students = [
  { id: 1, name: "Rahul", marks: 85, city: "Delhi" },
  { id: 2, name: "Aman", marks: 45, city: "Mumbai" },
  { id: 3, name: "Priya", marks: 92, city: "Pune" },
  { id: 4, name: "Neha", marks: 76, city: "Delhi" },
  { id: 5, name: "Rohit", marks: 39, city: "Jaipur" }
];


console.log(students.map(s => s.name));

console.log(students.filter(s => s.marks > 50));

console.log(students.find(s => s.id === 3));

console.log(
  students.reduce((sum, s) => sum + s.marks, 0)
);


let total = students.reduce((sum, s) => sum + s.marks, 0);
console.log(total / students.length);


console.log(
  students.some(s => s.marks < 50)
);


console.log(
  students.every(s => s.marks >= 50)
);


console.log(
  [...students].sort((a, b) => a.marks - b.marks)
);

console.log(
  [...students].sort((a, b) => b.marks - a.marks)
);

console.log(
  students.map(s => s.city)
);