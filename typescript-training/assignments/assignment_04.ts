//Array to store the transaction amount
let amount: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

//Variable declaration for credit, debit, total and suspicious transactions
let noOfCredit: number = 0;
let noOfDebit: number = 0
let totalCredit: number = 0;
let totalDebit: number = 0;
let totalBalance: number = 0;
let noOfSuspiciousTransaction: number = 0;

//Loop to Iterate through the transaction amount
for (let i: number = 0; i < amount.length; i++) {

    //Logic to calculate the credit and debit count and amount
    if (amount[i]! > 0) {
        noOfCredit += 1;
        totalCredit += amount[i]!;
    } else {
        noOfDebit += 1;
        totalDebit -= amount[i]!;
    }

    //Calculate the total balance
    totalBalance += amount[i]!;

    //Logic to count the no. of Suspicious transaction and message
    if ((amount[i]!) < -10000 || amount[i]! > 10000) {
        console.log("Suspicious credit/ debit Transaction with Amount = ", amount[i]);
        noOfSuspiciousTransaction += 1;
    }
}

console.log("Total number of suspicious transactions:", noOfSuspiciousTransaction);

console.log("____________________")
console.log("Total number of credit transactions:", noOfCredit);
console.log("Total number of debit transactions:", noOfDebit);
console.log("Total amount credited:", totalCredit);
console.log("Total amount debited:", totalDebit);
console.log("Final remaining amount in the account:", totalBalance);
