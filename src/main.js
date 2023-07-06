// import Vue from 'vue'
// import App from './App.vue'

// import Vue from 'vue/dist/vue.js';


import  Demo from './demo.vue'

const Vue = window.Vue
Vue.config.productionTip = false



const vm = new Vue({
    components: {Demo},
    data: {
        visible: true
    },
    template: `
      <div>
      <button @click="toggle">toggle</button>
      <hr>
      <Demo v-if="visible === true"/>
      </div>
    `,
    methods: {
        toggle(){
            this.visible = !this.visible
        }
    }
})

vm.$mount('#xinhai')

// 组件可以组合的物件

