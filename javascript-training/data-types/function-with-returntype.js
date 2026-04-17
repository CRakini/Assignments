

console.log("Current Program is typed by user named " + userName())

function userName() {
    console.log("Declaring the username in this function");
    let activeUser = "Rakini";
    return activeUser;
}

console.log("******************TEST CASE 2: VERIFY THE ACCOUNT BALANCE******************");
launchBrowserAndLogin("edge", "https://dev.icici.com/");
console.log("Verify the home page is displayed");
console.log("Verify the account balance is displayed as " + getAccountBalance());
logoutAndCloseBrowser();

function launchBrowserAndLogin(browser_name, url) {
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

