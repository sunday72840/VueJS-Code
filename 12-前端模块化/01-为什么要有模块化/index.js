let name = '小明';
let age = 18;
let flag = true;

function sum(num1, num2) {
    return num1 + num2
}

// if (flag) {
//     console.log(sum(20, 30));
// }

// 1.导出方式一
export {
    flag,
    sum
}

// 2.导出方式二
let num1 = 1000;
let height = 1.88;
export { num1, height }


// 3.导出函数和类

export function mu1(num1, num2) {
    return num1 * num2
}

export class Person {
    run() {
        console.log("在奔跑");
    }
}

// 4.export default

// const address = "北京市";
// export default address

export default function(argument) {

    console.log(argument);

}