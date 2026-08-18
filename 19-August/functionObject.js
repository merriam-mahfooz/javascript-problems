// Function to calculate bonus separtely based on experience and salary of employee
function calculateBonus(salary, experience) {
  let bonusAmount = 0;
  if (experience >= 0 && experience <= 1) {
    bonusAmount = 0;
  } else if (experience >= 2 && experience <= 4) {
    bonusAmount = salary * 0.1;
  } else if (experience >= 5 && experience <= 7) {
    bonusAmount = salary * 0.2;
  } else {
    bonusAmount = salary * 0.3;
  }
  return bonusAmount;
}

function calculateSalary() {   
  let finalSalary = 0;
  let bonusAmount = calculateBonus(employee.salary, employee.experience);
  finalSalary = employee.salary + bonusAmount;
  console.log(`Bonus Amount: ${bonusAmount}`);
  console.log(`Final Salary: ${finalSalary}`);
}

let employee = {
  name: "Nishu Pandey",
  salary: 45000,
  experience: 3,
};
calculateSalary();

