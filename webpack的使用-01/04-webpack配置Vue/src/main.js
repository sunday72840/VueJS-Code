// 1.使用commonjs的模块化开发规范
const { add, mul } = require('./js/mathUtils.js');
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化开发规范
import * as info from './js/info.js'
console.log(info.name);
console.log(info.age);
console.log(info.height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')