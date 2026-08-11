function MaxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let price of prices){
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price-minPrice);
    }

    return maxProfit;
}

const prices = [7,1,5,3,6,4];
console.log(MaxProfit(prices)); // Output: 5