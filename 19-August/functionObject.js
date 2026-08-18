function calculateSalary() {
  let finalSalary = 0;
  let bonusAmount = 0;
  if (employee.experience >= 0 && employee.experience <= 1) {
    console.log("No Bonus.");
    return;
  } else if (employee.experience >= 2 && employee.experience <= 4) {
    bonusAmount = employee.salary * 0.1;
  } else if (employee.experience >= 5 && employee.experience <= 7) {
    bonusAmount = employee.salary * 0.2;
  } else {
    bonusAmount = employee.salary * 0.3;
  }
  finalSalary = employee.salary + bonusAmount;
  console.log(`Bonus Amount: ${bonusAmount}`);
  console.log(`Final Salary: ${finalSalary}`);
}

let employee = {
  name: "Nishu Pandey",
  salary: 45000,
  experience: 9,
};
calculateSalary();
// Bonus Amount: 13500
// Final Salary: 58500
