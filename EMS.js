
// Array of Objects
const employees = [
  {
    id: 101,
    name: "Ali",
    department: "IT",
    salary: 60000,
  },
  {
    id: 102,
    name: "Sara",
    department: "HR",
    salary: 50000,
  },
  {
    id: 103,
    name: "Ahmed",
    department: "IT",
    salary: 70000,
  },
  {
    id: 104,
    name: "Ayesha",
    department: "Finance",
    salary: 55000,
  },
];

// ==============================
// for...of Loop
// Display Employee Details
// ==============================

console.log("===== Employee List =====");

for (const employee of employees) {
  console.log(`ID: ${employee.id}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Department: ${employee.department}`);
  console.log(`Salary: Rs.${employee.salary}`);
  console.log("--------------------------");
}

// ==============================
// map()
// Get Employee Names
// ==============================

const employeeNames = employees.map((employee) => employee.name);

console.log("\nEmployee Names:");
console.log(employeeNames);

// ==============================
// filter()
// Employees from IT Department
// ==============================

const itEmployees = employees.filter(
  (employee) => employee.department === "IT"
);

console.log("\nIT Department Employees:");
console.log(itEmployees);

// ==============================
// reduce()
// Calculate Total Salary
// ==============================

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log("\nTotal Salary:");
console.log(`Rs.${totalSalary}`);

// ==============================
// Average Salary using reduce()
// ==============================

const averageSalary = totalSalary / employees.length;

console.log("\nAverage Salary:");
console.log(`Rs.${averageSalary}`);

// ==============================
// map()
// Employee Summary
// ==============================

const summary = employees.map((employee) => ({
  Name: employee.name,
  Department: employee.department,
  Salary: employee.salary,
}));

console.log("\nEmployee Summary:");
console.table(summary);