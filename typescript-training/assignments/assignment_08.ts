//Storing the sentence in a variable
let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let sentence: string[] = paragraph.split(" ");
let occurance: number = 0;

//Login to find the occurance of the word Java and its index
for (let i: number = 0; i < sentence.length; i++) {
    if (sentence[i] == "Java") {
        occurance += 1;
        console.log("Java word occured in the index :", i)
    }
}

console.log("Total number of occurrences of the word 'Java' =", occurance);