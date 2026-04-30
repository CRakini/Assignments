//Declaring the number
let n = 5;

// Upper half of trianle
for (let i = 1; i <= n; i++) {
    let row = "";

    // Logic to sprint the spaces at beginning
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Login to print the numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Lower half of trianle
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Logic to sprint the spaces at beginning
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Login to print the numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}