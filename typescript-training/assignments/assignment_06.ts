const input: number = 25;

let prime: boolean = true;

// 1 is not a prime number
if (input <= 1) {
    console.log(input+ " is not a prime number");
    prime = false; 
}

// Logic to check the prime no from 2 to input value
for (let i: number = 2; i * i < input; i++) {
    console.log(i);
    if (input % i === 0) {
        prime = false;
        break;
    }
}

// Condition to print whether no. if prime or not
if (prime) {
    console.log(input+ " is a prime number");
} else {
    console.log(input+ " is not a prime number");
}