function bankOperation(pin, operation, amount) {
  if (pin !== bankAccount.pin) {
    return "Wrong Pin";
  }
  if (!bankAccount.isActive) {
    return "Inactive Account";
  }
  if (amount <= 0) {
    return "Invalid Amount";
  }
  function displayMessage(success, message, balance) {
    return { success: success, message: message, balance: balance };
  }
  switch (operation.toLowerCase()) {
    case "withdraw":
      if (amount > bankAccount.balance) {
        return "Insufficient Balance";
      } else {
        bankAccount.balance -= amount;
        return displayMessage(true, "Withdrawal Succesful", bankAccount.balance);
      }
    case "deposit":
      bankAccount.balance += amount;
      return displayMessage(true, "Deposit Succesful", bankAccount.balance);
    default:
      return "Invalid Operation";
  }
}

let bankAccount = {
  accountHolder: "Rahul",
  balance: 50000,
  pin: 1234,
  isActive: true,
};
console.log(bankOperation(1234, "withdraw", 10000));
