import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 110, name: 'sss', age: 18 },
            { id: 111, name: 'kobe', age: 23 },
            { id: 112, name: 'james', age: 34 },
            { id: 113, name: 'curry', age: 10 },
            { id: 114, name: 'sss', age: 18 },
        ]
    },
    mutations: {
        increment(state) {
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
        }
    },
    actions: {

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
    modules: {

    }
})


// 3.导出store对象
export default store