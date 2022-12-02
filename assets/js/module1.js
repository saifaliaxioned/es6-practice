import fetcher from './module2.js';

fetcher('https://jsonplaceholder.typicode.com/posts').then((result)=> console.log(result)).catch((e)=> console.log(e));
