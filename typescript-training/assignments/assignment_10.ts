let prices: number[] = [1, 6, 4, 3, 10];

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

if (maxProfit == 0) {
    console.log("No profit obtained :", maxProfit);
} else {
    console.log("MaxProfit obtained :", maxProfit);
}

