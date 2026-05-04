function mainFunction(a: number): void {
    console.log(a);
}
mainFunction(5);

function mainFunction2(print: (a: number) => number): void {
    console.log(print(5));
}

mainFunction2(
    function (a: number): number {
        return a;
    }
)