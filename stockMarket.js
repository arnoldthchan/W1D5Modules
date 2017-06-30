// Return largest profit/difference between array of a stock price
// If no profit could be made then return -1

stocks = [45, 24, 35, 31, 40, 38, 11];

function maxProfit(arr){
  profitList = [];
  maxProfit = 0;
  for (money in stocks){
    for (i = 0; i < money; i++){
      if (arr[money] > arr[i]){
        profitList.push(arr[money] - arr[i]);
      }
    }
  }
  return Math.max.apply( Math, profitList);

}


console.log(maxProfit(stocks));
//Should output $16