//Arrays to store students name and initial student marks
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];

//Create an array to store updated Marks after add 10 
let updatedMarks: number[] = [];

//Variable to store the total
let total: number = 0;

console.log("Updated Marks:");

//Logic to add 10 to each mark and find the total
for (let i: number = 0; i < studentMarks.length; i++) {
    updatedMarks[i] = studentMarks[i]! + 10;
    total += updatedMarks[i]!;
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`)
}

//Login to calculate the average mark
let averageMark: number = total / studentNames.length;
console.log(`Average Marks: ${averageMark}`)
