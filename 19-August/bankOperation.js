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
  switch (operation.toLowerCase()) {
    case "withdraw":
      if (amount > bankAccount.balance) {
        return "Insufficient Balance";
      } else {
        bankAccount.balance -= amount;
        return {
          success: true,
          message: "Withdrawal Successful",
          balance: bankAccount.balance,
        };
      }
    case "deposit":
      bankAccount.balance += amount;
      return {
        success: true,
        message: "Deposit Successful",
        balance: bankAccount.balance,
      };
    default:
      return "Invalid Operation";
  }
}

let bankAccount = {
  accountHolder: "Rahul",
  balance: 50000,
  pin: 1234,
  isActive: false,
};
console.log(bankOperation(1234, "deposit", 4000));
