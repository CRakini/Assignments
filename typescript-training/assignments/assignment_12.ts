let num: number = 2;
let power: number = -2;
let result: number = 1;

// Storing the power value in a temp variable (Purpose: Temp value will be changed if we have negative power value )
let tempPower = power;

// Converting negative power to positive for the calculation
if (power < 0) {
    tempPower = -power;  // convert to positive
}

// Logic to calculate power value of given number
for (let i: number = 1; i <= tempPower; i++) {
    result = result * num;
}

// If power is negative calculating result by additional logic
if (power < 0) {
    result = 1 / result;
}

console.log(`Power of ${num} of ${power} is ${result}`);