// 1.使用commonjs的模块化开发规范
const { add, mul } = require('./mathUtils.js');
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化开发规范
import * as info from './info.js'
console.log(info.name);
console.log(info.age);
console.log(info.height);