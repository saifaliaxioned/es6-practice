// function test() {
//     console.log('first');
//     console.log('second');
// }

// test();

// function *test() {
//     yield console.log('first'); // yield means pause
//     yield console.log('second');
// }

// let t = test();
// console.log(t.next());
// console.log(t.next());

function *arrfunc() {
    yield* [1,2,3];
}

let arr = arrfunc();

console.log(arr.next());
console.log(arr.next());