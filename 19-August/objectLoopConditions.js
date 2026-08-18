function greaterThan10K(obj) {
  let result={};
  for (let [key, value] of Object.entries(obj)) {  //try to use objects here and create another func for total
    if (value >= 10000) {
      result[key] = value;
    }
  }
  return result;
}
function calcTotal(obj) {
  let total = 0;
  for(let value of Object.values(obj)){
    total += value;
  }
  return total;
}

function expensiveCheap(obj) {
  let max = 0,
    min = Infinity;
  let maxPro = "",
    minPro = "";

  for (let key of Object.keys(obj)) {
    if (max < obj[key]) {
      max = obj[key];
      maxPro = key;
    }
    if (min > obj[key]) {
      min = obj[key];
      minPro = key;
    }
  }
  console.log(`Most Expensive Product: ${maxPro} (${max})`);
  console.log(`Least Expensive Product: ${minPro} (${min})`);
}
let products = {
  laptop: 50000,
  phone: 30000,
  mouse: 800,
  keyboard: 1500,
  monitor: 12000,
};

let expensiveProducts = greaterThan10K(products);
console.log("Products over 10,000:", expensiveProducts);
console.log("Total value of expensive products:", calcTotal(expensiveProducts));

expensiveCheap(products);
