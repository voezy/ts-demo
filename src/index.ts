class Student {
  fullname: string;

  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullname = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);