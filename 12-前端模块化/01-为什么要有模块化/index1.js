// 1.导入的是{}中定义的变量
import { flag, sum } from "./index.js";
if (flag) {
    console.log("小明是天才");
    console.log(sum(50, 100));
}
// 2.直接导入export 定义的变量
import { num1, height } from "./index.js";

console.log(num1);
console.log(height);

// 3.导入export的function
import { mu1, Person } from "./index.js";
console.log(mu1(20, 30));

const p = new Person();
p.run();

// 4.export default
// import addr from './index.js';
// console.log(addr);

import arg from "./index.js";
arg("hello，你好啊");


// 5.统一全部导入

import * as indes from "./index.js";
console.log(indes.flag);