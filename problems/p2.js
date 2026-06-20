/*
Problem Statement: build a console based program that processes student records using array methods
tasks---->
1. filter() to get passed students (marks more than 40).
2. Use map() to add grade in all the students data
    Grade Rules:
   - Marks >= 80 : Grade A
   - Marks >= 60 : Grade B
   - Marks >= 40 : Grade C
   - Otherwise   : Grade F
3. reduce() to calculate the class average marks.
4. reduce() to find the topper of the class.
5. display the final results .


*/

const students = [
  { id: 1, name: "Aman", marks: 85, attendance: 92 },
  { id: 2, name: "Riya", marks: 38, attendance: 76 },
  { id: 3, name: "Karan", marks: 67, attendance: 81 },
  { id: 4, name: "Simran", marks: 91, attendance: 88 },
  { id: 5, name: "Raj", marks: 45, attendance: 60 },
  { id: 6, name: "Neha", marks: 29, attendance: 95 },
];

const passedStudents = students.filter((std) => std.marks >= 40);

const studentReport = students.map((std) => {
  let grade;

  if (std.marks >= 80) grade = "A";
  else if (std.marks >= 60) grade = "B";
  else if (std.marks >= 40) grade = "C";
  else grade = "F";

  return {
    ...std,
    grade,
  };
});

const totalMarks = students.reduce((sum, std) => sum + std.marks, 0);

const averageMarks = (totalMarks / students.length).toFixed(2);

const topper = students.reduce((highest, student) =>
  student.marks > highest.marks ? student : highest,
);

console.log("STUDENT PERFORMANCE ANALYZER ---------->\n");

console.log("Passed Students:");
passedStudents.forEach((std) => {
  console.log(`- ${std.name} (${std.marks} marks)`);
});

console.log("\nStudent Report:");
studentReport.forEach((std) => {
  console.log(
    `Name: ${std.name} | Marks: ${std.marks} | Attendance: ${std.attendance}% | Grade: ${std.grade}`,
  );
});

console.log(`\nClass Average Marks: ${averageMarks}`);
console.log(`Topper: ${topper.name} (${topper.marks} marks)`);
