export {};
class Department {
  name: string;
  private employeeArray: string[] = [];

  constructor(name: string) {
    this.name = name;
  }
  addEmployee(employeeName: string) {
    this.employeeArray.push(employeeName);
  }

  printEmployees() {
    console.log('Total Employee : ', this.employeeArray.length);
  }
}

let engineering = new Department('engineering');
engineering.addEmployee('John');

// engineering.employeeArray[5] = 'Bob'; // not correct as employeeArray is pvt, only accessible inside the class
engineering.printEmployees();
