// // temporal dead zone
// console.log(a);

// let a = 30;

// // let b = 20;
// {
//   let a = 20;
//   console.log(a);
// }


// // var is function scoped
// // function x() {
// //   var a = 100;
// // }
// // console.log(a);

// // let and const are block scoped

// function x() {  // we can't access a even in a function but we can access a when we are using var because it is function scope
//   if (true) {
//     let a = 100;
//   }
//   console.log(a);
// }
// x();

// // if (true) {
// //   let d = 40;
// // }
// // console.log(d); // it shows referenceError d is not defined

// // let a;
// // console.log(a); // undefined

// // we can't create new object/array with a same name when we are using const
// const obj = {
//   name : 'saif',
//   roll : 8
// }

// obj.name = 'ali';
// obj.lastname = 'sayyed';
// console.log(obj);

// const arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);




// arr = [1, 4, 3, 2];
// arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   let b = arr.length;
//   b = b - i
//   arr1.push(b);
// }
// console.log(arr1);

let arr = [1, 2, 3, 4, 5];

// const arr2 = (arr) => {
//   let first = arr.pop();
//   arr.unshift(first);
//   return arr;
// }

let d = 4;

// const rotateFunc = (arr, d) => {
//   let newArr = [];
//   if (d <= arr.length) {
//     for (let i = 0; i < d; i++) {
//       newArr.push(arr.shift(i));
//       // console.log(newArr);
//       // console.log(arr);
//     }
//     let result = [...arr,...newArr];
//     console.log(result);
//   } else {
//     console.log('err');
//   }
// }
// rotateFunc(arr, d);

// const reverseFunc = (arr) => {
//   let temp = [];
//   for (let i = arr.length; i > 0; i--) {
//     temp.push(i);
//   }
//   console.log(temp);
// }
// reverseFunc(arr);

// const linkArr = [2,16,13];



// linkedlist
class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }
}
let list = new List(200);
console.log(list);














