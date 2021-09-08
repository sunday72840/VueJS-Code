export default {
    template: `
    <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">Vue</button>
    <h2>{{name}}</h2>
    </div>
    `,
    data() {
        return {
            message: 'Hello,WebPack',
            name: "codeVueJs"
        }
    },
    methods: {
        btnClick() {

        }
    }
}