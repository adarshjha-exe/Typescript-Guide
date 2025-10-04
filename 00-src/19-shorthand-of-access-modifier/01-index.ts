export {};
class Department {
  constructor(public name: string, private dept: string) {}

  printEmployees() {
    console.log(`${this.name}:${this.dept}`);
  }
}

let engineering = new Department('engineering', 'eng');
engineering.printEmployees();
