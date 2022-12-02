class studentName {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return `hello! ${this.name}`;
  }
}


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