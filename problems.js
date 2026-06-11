/*
Problem Statement : Convert the given objects of array in below format max marks is 150. if the percentage is above 60 then result  status is pass else fail.
*/

const students = [
  { name: "John", marks: [15, 20, 30, 29, 25] },
  { name: "Jane", marks: [30, 24, 10, 19, 22] },
  { name: "Bob", marks: [20, 21, 30, 23, 15] },
  { name: "Alice", marks: [18, 10, 5, 3, 10] },
];

const result = students.map((student) => {
  const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
  const percentage = (totalMarks / 150) * 100;
  const status = percentage > 60 ? "pass" : "fail";
  return { name: student.name, percentage: percentage.toFixed(2), status };
});

console.log(result);
