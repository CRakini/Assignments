//Arrays to store the emp details
let name: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0];
let exp: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let yea: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

//Variable to strore variable pay and bonus
let variablePay: number = 0;
let bonus: number = 0;

//array to store hike and hike%
let hike: number[] = [];
let hikePercentage: number[] = [];

//Logic to calculate hike and hike %
for (let i: number = 0; i < name.length; i++) {

    if (yea[i]! >= 4.0) {
        variablePay = 15;
        bonus = 1500;
    } else if (yea[i]! >= 3 && yea[i]! < 4) {
        variablePay = 10;
        bonus = 1200;
    } else {
        variablePay = 3;
        bonus = 300;
    }

    if (exp[i]! >= 5) {
        hike[i] = (baseSalary[i]! * variablePay) / 100 + bonus + 5000
    } else {
        hike[i] = (baseSalary[i]! * variablePay) / 100 + bonus
    }

    hikePercentage[i] = (hike[i]! / baseSalary[i]!) * 100;
}

//Creating Empty Map store Empname and hike %
let empHikeDetails: Map<string, number> = new Map();

//Iterating to store the values in the empty Map
for (let j: number = 0; j < name.length; j++) {
    empHikeDetails.set(name[j]!, hikePercentage[j]!)
}

console.log("Hike Percentage details of each employee")
console.log(empHikeDetails)
