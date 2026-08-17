function buyProduct(quantity)
{
    if(quantity <=0)
    {
        console.log("Invalid Quantity.");
        return;
    }
    if(quantity > product["stock"])
    {
        console.log("Not Enough Stock.");
        return;
    }
    let totalPrice = quantity*product["price"];
    product["stock"] -= quantity;

    console.log(`Total Amount: ${totalPrice}`);
    console.log(`Remaining Stock: ${product["stock"]}`);
}

let product = {
    name: "Snickers",
    price: 25,
    stock: 50
};

buyProduct(10);