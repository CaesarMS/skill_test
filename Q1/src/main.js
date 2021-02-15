import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  data:{

  },
  methods:{
    add: function() {
      console.log("hehe");
    }
  },
  render: h => h(App)
})
