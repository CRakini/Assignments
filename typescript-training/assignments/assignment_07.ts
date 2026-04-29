//Given sentence in the assignment
let originalSentence: string = "Java programming is fun and challenging";

//Finding no. of words in the original sentence
let splittedSentence: string [] = originalSentence.split(" ");
console.log(splittedSentence);
console.log("Total number of words in the sentence = ", splittedSentence.length);

//Logic to reverse the string and print it
let reversedSentence: string = " ";
for (let i: number = originalSentence.length - 1; i >= 0; i--) {
   reversedSentence += originalSentence.charAt(i);
}
console.log("Reversed Sentence = ", reversedSentence)

//Logic to convert the first character of each word to uppercase and print original sentence
let upperCaseSentence: string = " ";
for (let updatedsentence of splittedSentence){
    upperCaseSentence += updatedsentence?.charAt(0).toUpperCase() + updatedsentence?.slice(1).toLocaleLowerCase() + " ";
}
console.log(`Updated sentence with first character in UpperCase = ${upperCaseSentence}`);