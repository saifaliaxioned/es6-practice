// temporal dead zone
console.log(a);

let a = 30;

// let b = 20;
{
  let a = 20;
  console.log(a);
}


// var is function scoped
// function x() {
//   var a = 100;
// }
// console.log(a);

// let and const are block scoped

function x() {  // we can't access a even in a function but we can access a when we are using var because it is function scope
  if (true) {
    let a = 100;
  }
  console.log(a);
}
x();

// if (true) {
//   let d = 40;
// }
// console.log(d); // it shows referenceError d is not defined

// let a;
// console.log(a); // undefined

// we can't create new object/array with a same name when we are using const
const obj = {
  name : 'saif',
  roll : 8
}

obj.name = 'ali';
obj.lastname = 'sayyed';
console.log(obj);

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

















