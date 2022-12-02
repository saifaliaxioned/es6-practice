// enhanced object literals
// let n = "student";

// const obj = {
//   [`${n}name`] : 'saif',
//   course : 'js'
// }

// console.log(obj);

// old
// const stuObj = {
//   fname : "saif",
//   lname : 'sayyed', 
//   fullname : function() {
//     return this.fname + " " + this.lname;
//   }  
// };
// console.log(stuObj.fullname());

// new
// let fname = "saif";
// let lname = 'sayyed';
// let fullname = function() {
//   return `${this.fname} ${this.lname}`
// };
// const stuObj2 = {fname, lname, fullname};
// console.log(stuObj2.fullname());

// new function syntax
const stuObj3 = {
  fname : "saif",
  lname : 'sayyed', 
  fullname() {
    return this.fname + " " + this.lname;
  }  
};
console.log(stuObj3.fullname());

// const stuObj3 = {
//   fname : "saif",
//   lname : 'sayyed', 
//   'student fullname'() {
//     return this.fname + " " + this.lname;
//   }  
// };
// console.log(stuObj3['student fullname']());

// we can create object using function in es6
let fname = 'saif';
let lname = 'sayyed';
let roll = 8;

function fullname(fname, lname, roll) {
  let fullname = `${fname} ${lname}`;
  return {fullname, roll};
}

console.log(fullname(fname, lname, roll));


{
  {
    {
      
      console.log(a);
    }
  }
}