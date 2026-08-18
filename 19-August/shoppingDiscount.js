function purchase(price) {
  let discount;
  if (user.age < 18) {
    console.log("You cannot purchase.");
    return;
  } else {
    if (user.isPremium) {
      discount = 0.2 * price;
    } else {
      discount = 0.1 * price;
    }
  }
  let finalPrice = price - discount;
  if (finalPrice <= user.balance) {
    user.balance -= finalPrice;
    console.log("Purchase Successful");
    console.log(`Original Price: ${price}`);
    console.log(`Discount Price: ${discount}`);
    console.log(`Final Price: ${finalPrice}`);
    console.log(`Balance: ${user.balance}`);
  } else {
    console.log("Insufficient Balance.");
  }
}

let user = {
    name: "Rahul",
    age: 21,
    balance: 1000, 
    isPremium: false
   };
purchase(1200);
console.log(user);
