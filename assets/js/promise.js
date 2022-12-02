// PROMISES
let prom = (pass) => {
  return new Promise((resolve, reject) => {
    if (pass) {
      resolve("successfull");
    } else {
      reject("failed");
    }
  });
}

prom(true).then((result) => {
  console.log(result)
},(err)=> {
  console.log(err.message);
})


// let prom = (pass) => {
//   return new Promise((resolve, reject) => {
//     // if (pass) {
//     //   resolve("successfull");
//     // } else {
//     //   reject("failed");
//     // }
//     let url = fetch('https://jsonplaceholder.typicod.com/posts').then((data) => {
//       resolve(data.json())
//     }).catch((e) => {
//       reject(e);
//     });

//   });
// }

// prom(true).then((result) => {
//   console.log(result)
// },(err)=> {
//   console.log(err.message);
// })

// console.log(prom);


// ASYNC AWAIT to avoid resolve and reject aysnc await is created.
let api = async () => {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts');
  return data.json();
}

api().then((res)=> {
  console.log(res);
}).catch((e)=>{
  console.log(e.message);
});