import Vue from 'vue'
import Vuex from 'vuex'
// 导入常量文件
import { INCREMENT } from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        // context:上下文 
        // VueX里更改状态进行异步操作(网络请求)必须在actions里进行异步代码编写
        aUpdateName(context) {
            // 这里的commit是属于moduleA的
            setTimeout(() => {
                context.commit('updateName', 'wangwu')
            }, 1000)
        }
    },
    getters: {
        // fullName和fullName2是层级关系，fullName2可以直接把整个getter对象传入
        fullName(state) {
            return state.name + '1111'
        },
        fullName2(state, getters) {
            return getters.fullName + '2222'
        },
        // 如果看不明白可以先把程序运行一下
        // 第三个fullName3 可以传3个参数，这里的rootState是调用下面定义的store里的counter
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    }
}
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 110, name: 'sss', age: 18 },
            { id: 111, name: 'kobe', age: 23 },
            { id: 112, name: 'james', age: 34 },
            { id: 113, name: 'curry', age: 10 },
            { id: 114, name: 'sss', age: 18 },
        ],
        info: {
            name: 'kobe',
            age: 40,
            height: 1.98
        }
    },
    mutations: {
        // 另一种定义方法的写法
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = 'codewhy'
                // // 不能在这里进行异步操作
                // setTimeout(() => {
                //     state.info.name = 'codewhy'
                // }, 1000);
                // state.info['addres'] = '洛杉矶'
                // 通过vue.set的方法把添加的对象变成响应式
                // Vue.set(state.info, 'address', '洛杉矶')
                // Vue.delete(state.info, 'age')
        }
    },
    // context:上下文 
    // VueX里更改状态进行异步操作(网络请求)必须在actions里进行异步代码编写
    actions: {
        // 第一种写法
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         // 先提交commit,然后再回调payload()
        //         context.commit('updateInfo')
        //         console.log(payload.message); //可以用payload回调APP组件中定义的message方法
        //         payload.success() //也可以用payload回调参数来调用app组件中的success构造函数
        //     }, 1000);
        // },

        // 第二种写法
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload);
                    // resolve回调完的数据返回到app组件中then里的res打印结果
                    resolve('11111111')
                }, 1000)
            })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgestu(state) {
            // return function(ages) {
            // return state.students.filter(s => s.age > ages)
            return ages => {
                return state.students.filter(a => a.age > ages)
                    // }
            }
        }
    },
    // 可以把上面的几个方法抽离成一个模块化管理
    modules: {
        a: moduleA
    }
})


// 3.导出store对象
export default store