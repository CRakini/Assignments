let rows: number = 10;

//Login to print left righthandle triangle
for (let i: number = 1; i <= rows; i++) {
    let triangle: string = "";
    for (let j: number = i; j < rows; j++) {
        triangle += " ";
    }
    for (let j: number = 1; j <= i; j++) {
        triangle += "*"
    }
    console.log(triangle);
}