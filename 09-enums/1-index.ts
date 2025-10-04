enum Roles {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

let person3: {
  name: string;
  role: Roles;
} = {
  name: 'John',
  role: Roles.READ_ONLY,
};

if (person3.role === Roles.READ_ONLY) {
  console.log('PERSON HAVE READ_ONLY ACCESS');
}

/********Example 2********** */
enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

function someWork() {
  const ok = true; // some logic
  return ok ? Status.SUCCESS : Status.ERROR;
}

let result = someWork();
console.log(result);
