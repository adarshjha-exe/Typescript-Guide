class User {
  readonly createdAt: Date;
  constructor() {
    this.createdAt = new Date();
  }
}
const u1 = new User();
// u1.createdAt = new Date(); // error
