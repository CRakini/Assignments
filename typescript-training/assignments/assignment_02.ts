interface customerDetails {
    customerName : string
    creditScore : number
    income : number
    isEmployed : boolean
    debtToIncomeRatio : number
}
let customerInfo: customerDetails = {
    customerName : "John doe",
    creditScore : 720,
    income : 55000.0,
    isEmployed : true,
    debtToIncomeRatio : 35.0
}

function checkLoanEligibility(): void{
    if(customerInfo.creditScore > 750){
        console.log("The loan is automatically approved.")
    }else if(customerInfo.creditScore >= 650 && customerInfo.creditScore <=750){
        if(customerInfo.income >= 50000){
            if(customerInfo.isEmployed){
                if(customerInfo.debtToIncomeRatio <= 40){
                    console.log(`The loan is approved for ${customerInfo.customerName}`);
                }else{
                    console.log("The loan is denied.");
                }
            }else{
                console.log("The loan is denied.");
            }
        }else{
            console.log("The loan is denied.");
        }
    }else{
        console.log("The loan is denied.");
    }
}

checkLoanEligibility();