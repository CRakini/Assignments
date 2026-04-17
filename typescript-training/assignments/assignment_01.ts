// 1. Temperature of a city in degrees Celsius: 25.5
let temperature: number = 25.5;
console.log(`1. Temperature of a city in degrees Celsius: ${temperature}`);

// 2. Whether a customer has placed an order: true or false
interface shoppingStatus {
    isTrue: boolean,
    isFalse: boolean
}

let orderPlaced: shoppingStatus = {
    isTrue: true,
    isFalse: false
}

console.log(`2. Whether a customer has placed an order: ${orderPlaced.isTrue}`);
// console.log(`2. Whether a customer has placed an order: ${orderPlaced.isFalse}`);

// 3. Person's phone number: "123-456-7890"
let phoneNumber: string = '"123-456-7890"';
console.log(`3. Person's phone number: ${phoneNumber}`);

// 4. Amount of money in a customer's bank account: 1000.50
let accountBalance: number = 1000.50;
console.log(`4. Amount of money in a customer's bank account: 1000.50`)

// 5. Person's email address: "john.doe@example.com"
let emailId: string = '"john.doe@example.com"';
console.log(`5. Person's email address: ${emailId}`);

// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface coordinates {
    latitude: number,
    longitude: number
}

let location: coordinates = {
    latitude: 37.7749,
    longitude: -122.4194
}

console.log(`6. Coordinates of a location (latitude, longitude): ${location.latitude},${location.longitude}`);

// 7. Person's marital status: true or false
interface status {
    isTrue: boolean,
    isFalse: boolean
}

let marriageStatus: status = {
    isTrue: true,
    isFalse: false
}

console.log(`7. Person's marital status: ${marriageStatus.isTrue}`);
// console.log(`7. Person's marital status: ${marriageStatus.isFalse}`);

// 8. Person's occupation: "Software Engineer"
let occupation: string = '"Software Engineer"';
console.log(`8. Person's occupation: ${occupation}`);

// 9. Person's favourite colour: "Blue"
let favColor: string = '"Blue"';
console.log(`9. Person's favourite colour: ${favColor}`);

// 10.Current year: 2023
let year: number = 2023;
console.log(`10.Current year: ${year}`);

// 11.Number of followers on a social media platform: 1,000,000
let followersCount: string = "1,000,000";
console.log(`11.Number of followers on a social media platform: ${followersCount}`);

// 12.Rating of a movie: 7.5
let rating: number = 7.5;
console.log(`12.Rating of a movie: ${rating}`);

// 13.Person's blood type: 'A'
let bloodType: string = "'A'";
console.log(`13.Person's blood type: ${bloodType}`);

// 14.Title of a book: "To Kill a Mockingbird"
let bookTitle: string = '"To Kill a Mockingbird"';
console.log(`14.Title of a book: ${bookTitle}`);

// 15.Number of employees in a company: 500
let empCount: number = 500;
console.log(`15.Number of employees in a company: ${empCount}`);

// 16.Time of an event: 2:30 PM
let time: string = "2:30 PM";
console.log(`16.Time of an event: ${time}`);

// 17.Name of a country: "United States"
let countryName: string = '"United States"';
console.log(`17.Name of a country: ${countryName}`);

// 18.Person's eye color: "Brown"
let eyeColor: string = '"Brown"';
console.log(`18.Person's eye color: ${eyeColor}`);

// 19.Person's birthplace: "New York City"
let birthplace: string = '"New York City"';
console.log(`19.Person's birthplace: ${birthplace}`);

// 20. Distance between two cities: 200.5
let distance: number = 200.5;
console.log(`20. Distance between two cities: ${distance}`);