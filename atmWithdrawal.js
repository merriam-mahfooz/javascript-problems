function withdraw(pin,amount)
{
    if(pin !== account["pin"])
    {
        console.log("Invalid PIN");
        return;
    }

    if(amount <=0)
    {
        console.log("Invalid Amount");
        return;
    }

    if(amount > account["balance"])
    {
        console.log("Insufficient balance.");
        return;
    }

    let updatedBalance = account["balance"] - amount;
    account["balance"] = updatedBalance;
    console.log(`Remaining Balance: ${updatedBalance}`);
};

let account={
    name:"Rahul",
    balance: 30000,
    pin: 1234
};
withdraw(1234,2000);