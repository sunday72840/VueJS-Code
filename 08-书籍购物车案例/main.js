const app = new Vue({
    el: '#app',
    data: {

        //创建一个数组，数组里添加字典
        books: [{
                id: 1,
                name: '《算法导论》',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                data: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                data: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                data: '2006-3',
                price: 128.00,
                count: 1
            },
            {
                id: 5,
                name: '《数据结构》',
                data: '2006-3',
                price: 83.00,
                count: 1
            }
        ]
    },
    methods: {
        //数量的增加
        increment(index) {
            this.books[index].count++
        },
        //数量的减少
        decrement(index) {
            this.books[index].count--
        },
        //移除课本
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },

    //计算购买书本的总价格
    computed: {
        totalPrice() {
            // let totalPrice = 0; //初始化一个价格
            // for (let i = 0; i < this.books.length; i++) { //for循环遍历books的长度
            //     totalPrice += this.books[i].price * this.books[i].count //用价格乘以数量 相加并复制给totalPrice
            // }
            // return totalPrice //最后返回一个价格值

            //第二种方式 for(let i in this.books)
            // let totalPrice = 0;
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice;

            //第三种方式 for (let i of this.books)
            // let totalPrice = 0;
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice


            //高阶函数写法
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    },
    //过滤器filters
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})

//filter需要回调函数function 返沪ture或者false
// const nums = [10, 20, 1, 111, 222, 1, 1, 3, 4, 1, 2, 4, 1, 2, 3, 1, 2241, 22331, 224113, 22028];
// let newNums = nums.filter(function(i) {
//         return i <= 100
//     })
//     // console.log(newNums);

// //map函数的使用 把筛选出来的数字乘以2，返回出结果
// let new2Nums = newNums.map(function(n) {
//     return n * 2;
// })
// console.log(new2Nums);

// //reduce函数的使用 对筛选出来的值进行相加汇总
// let total = new2Nums.reduce(function(preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total);

//高阶函数的写法
// let total = nums.filter(function(n) { //筛选出小于100的数字
//         return n < 100 //返回一次
//     }).map(function(n) { //把筛选出来的数字进行乘以2
//         return n * 2 //返回结果
//     }).reduce(function(preValue, n) { //把乘以2的数字结果进行相加
//         return preValue + n //把相加的结果返回一次
//     }, 0) //preValue初始化值是 0
// console.log(total); //打印最终结果