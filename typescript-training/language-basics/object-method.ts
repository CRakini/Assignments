interface personInfo {
    name: string,
    age?: number,
    visaStatus: boolean,
    salary?: number,
    address: {
        city: string,
        state: string,
        zip: number,
        country?: string
    }
}

let person: personInfo = {
    name: "bharath",
    age: 36,
    visaStatus: true,
    address: {
        city: "hyd",
        state: "TS",
        zip: 500081
    }
}

delete person.age;
console.log(person)

console.log("age" in person);
console.log("zip" in person.address);

console.log(Object.entries(person));