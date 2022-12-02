// Rest operator
// we can't add rest operator in start or middle
function sum(name, ...rest) {
  let totalMarks = 0;
  for (let i of rest) {
    totalMarks += i;
  }
  console.log(`hi ${name} your mark is ${totalMarks}`);
}

sum('saif',50,60,10);

arr = [1,2,3,4,5,6];

const obj1 = {
  name : 'saif',
  age : 22,
  city : 'thane'
}

// Spread operator
// function sum(name, ...rest) {
//   let totalMarks = 0;
//   for (let i of rest) {
//     totalMarks += i;
//   }
//   console.log(`hi ${name} your mark is ${totalMarks}`);
// }
// let arr = [50,60,60];
// sum('saif',...arr);



// const obj1 = {
//   name : 'saif'
// }

// const obj2 = {
//   age : 22
// }

// easy to concat
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


// easy to copy
// Old
let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4,5,6);

// New
let arr2 = [0,...arr1,4,5,6];
console.log(arr2);

const add = () => {
  console.log(this);
};

add();
