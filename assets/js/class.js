class studentName {
  #pin;
  constructor(name,pin) {
    this.name = name;
    this.#pin = pin;
  }

  hello() {
    return `hello! ${this.name}`;
  }

  specialDetails() {
    return this.#pin;
  }
}

const stu = new studentName('saif','1234');
console.log(stu.pin);


class student extends studentName {
  constructor(name,age) {
    super(name);
    this.age = age;
  }
  stuAge() {
    return `hello ${this.name} your age is ${this.age}`;
  }
}

const stu1 = new student('saif',22);

console.log(stu1.stuAge());