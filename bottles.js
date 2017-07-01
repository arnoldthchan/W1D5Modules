// Each bottle of pop costs $2 to purchase
// For every four bottle caps, you can get one free (full) bottle of pop
// For every two empty bottles, you can get one free (full) bottle of pop
// Given these parameters, write a program so that you can figure out
// how many total bottles of pop can be redeemed given a customer investment.

// Task 1
// Figure out the algorithm that will calculate this.
//For example, given a $20 investment, the customer will get 10 bottles of pop.
// That gives a supply of both bottles and bottle caps that can be used to redeem for further bottles,
// which will then produce a further supply for recycling.

// Task 2
// Have your program accept an argument (argv)
// that will allow the user to specify the amount (in dollars)
// that the customer is going to spend.
// The node script will then calculate the total number of bottles that the customer will receive.

// Task 3
// Enhance the output of your program so that once the amount has been given
// it provides a breakdown of
// how many bottles were purchased
// how many were obtained through bottle recycling, and
// how many were obtained through bottle cap recycling.

// Task 4
// Add to the output
// so that the program will tell the customer
// how many bottles and bottle caps they will have left over.
// We have to upsell the customer on buying more pop after all!


//pop = money / 2, remainder money,  pop = +bottlecaps
//4bottleCaps = +1pop
//2emptyBottle = +1pop
var money = parseInt(process.argv[2]);

var basePop = Math.floor(money / 2);
var bottleCaps = Math.floor(basePop / 4);
var emptyBottle = Math.floor(basePop /2);
var extraBottles =  bottleCaps + emptyBottle;
var totalPop = basePop + extraBottles;

  if (isNaN(money)) {
    return money;
  } else if (money % 2 !== 0){
      dollar = 1;
      console.log(`$${money} of pop`);
      console.log(`$1 leftover`);
  } else {
    console.log(`$${money} of pop`);
    }

  console.log(`${basePop} bottles of pop  \n${bottleCaps} pops from bottle caps \n${emptyBottle} pops from empty bottles`);
  console.log(`Customer will receive ${totalPop} bottles of pop`);

// fun1 = check if money
// fun2 = divide money into pop + leftover?
// fun3 bottlescaps + extra bottles
// fun4 empty bottles += extra bottles
// return total pop


