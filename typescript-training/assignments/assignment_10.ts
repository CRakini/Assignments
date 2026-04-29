let prices: number[] = [7, 1, 5, 3, 6, 4];

let minPrice: number = prices[0]!;
let maxProfit = 0;

for (const price of prices) {
    if (price < minPrice) {
        minPrice = price;
    } else {
        const profit = price - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
}

console.log(maxProfit);