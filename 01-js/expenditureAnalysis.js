/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactionList = [{
    itemName : "condom",
    category : "Health",
    price : 20,
    timeStamp : Date.now()
},{
    itemName : "TV",
    category : "Electronics",
    price : 20000,
    timeStamp : Date.now()
},{
    itemName : "Eggs",
    category : "Grocery",
    price : 96,
    timeStamp : Date.now()
},{
    itemName : "Mobile",
    category : "Electronics",
    price : 15000,
    timeStamp : Date.now()
},{
    itemName : "Vegetable",
    category : "Grocery",
    price : 100,
    timeStamp : Date.now()
},]



  
function calculateTotalSpentByCategory(transactions) {
      let expenditureObject = {};
  
      for (let i=0; i<transactions.length; ++i) {
          let transaction = transactions[i];
          if (expenditureObject.hasOwnProperty(transaction.category)) {
              let categoryCount = expenditureObject[transaction.category];
              categoryCount += transaction.price;
              expenditureObject[transaction.category] = categoryCount;
          } else {
              expenditureObject[transaction.category] = transaction.price;
          }
      }
  
      console.log("EXPENDITURES: ", expenditureObject);
  
      let keys = Object.keys(expenditureObject);
      let values = Object.values(expenditureObject);
  
      let resultArray = [];
      for (let i=0; i<keys.length; ++i) {
          let tempObject = {};
          tempObject['category'] = keys[i];
          tempObject['totalSpent'] = values[i];
          // tempObject[keys[i]] = values[i];
          resultArray.push(tempObject);
      }
      return resultArray;
  }

  console.log(calculateTotalSpentByCategory(transactionList));


















