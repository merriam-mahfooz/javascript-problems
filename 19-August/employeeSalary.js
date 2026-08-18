function salaryGreaterThanFiftyK(obj) {
  console.log("Employess with salary greater than 50k: ");
  for (const key of Object.keys(obj)) {
    if (obj[key] >= 50000) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

function totalSalary(obj) {
  let totalSal = 0;
  for (const sal of Object.values(obj)) {
    totalSal += sal;
  }
  console.log(`Total Salary: ${totalSal}`);
}

function maxSalary(obj) {
  let max = 0,
    maxEmp = "";
  for (const key of Object.keys(obj)) {
    if (max < obj[key]) {
      max = obj[key];
      maxEmp = key;
    }
  }
  console.log("Employee with highest salary: ");
  console.log(`${maxEmp}: ${max}`);
}

let employees = {
  Aman: 45000,
  Rohit: 62000,
  Neha: 38000,
  Priya: 75000,
  Karan: 55000,
};
salaryGreaterThanFiftyK(employees);
totalSalary(employees);
maxSalary(employees);
