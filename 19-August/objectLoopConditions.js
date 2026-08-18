function greaterThan10KAndTotal(obj) {
  let total = 0;
  for (let key of Object.keys(obj)) {
    total += obj[key];
    if (obj[key] >= 10000) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  console.log(`Total Price: ${total}`);
}

function expensiveCheap(obj) {
  let max = 0,
    min = 50000;
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
greaterThan10KAndTotal(products);
expensiveCheap(products);
