const students = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 42 },
  { name: "Sara", marks: 76 },
  { name: "Ayesha", marks: 91 },
  { name: "Bilal", marks: 58 }
];
// Display all students
console.log("Student List:");
students.forEach(student => {
  console.log(`${student.name}: ${student.marks}`);
});
// Passed Students
const passedStudents = students.filter(student => student.marks >= 50);

console.log("\nPassed Students:");
passedStudents.forEach(student => {
  console.log(student.name);
}); 
// Grades
const grades = students.map(student => {
  let grade;

  if (student.marks >= 80) {
    grade = "A";
  } else if (student.marks >= 70) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else if (student.marks >= 50) {
    grade = "D";
  } else {
    grade = "Fail";
  }
   return {
    ...student,
    grade
  };
});
console.log("\nStudent Grades:");
console.log(grades);

// Average Marks
const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const average = totalMarks / students.length;

console.log("\nAverage Marks:", average);