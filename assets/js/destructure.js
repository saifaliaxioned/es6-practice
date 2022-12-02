// DESTRUCTURING ARRAY

// old
// let student = ['saif' , 22, 'thane'];
// let name = student[0];
// let age = student[1];
// let city = student[2];

// New
// let student = ['saif', 22, 'thane', ['axioned', 'trainee']];
// let [stuname, age, city, [company, post]] = student;
// console.log(stuname,age,city,company,post);


// function user([stuname, age, city, [company, post]]) {
//   console.log(stuname,age,city,company,post);
// }
// user(['saif', 22, 'thane', ['axioned', 'trainee']]);


// function user() {
//   return ['saif' , 22, 'thane'];
// }
// let [name, age, city] = user();



// DESTRUCTURING OBJECT
// variable name will be same as key

let stuObj = {
  stuName : 'saif',
  age : undefined,
  city : 'thane'
}

let {stuName , age = 30, city} = stuObj;
// we can also write alias name like this 
// let {stuName : n , age : a , city : c} = stuObj;

console.log(stuName);
console.log(age);

