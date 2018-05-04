import Vue from 'vue';
import Frame from './app.vue';



let app = new Vue({
    el: '#app',
    render: h => h(Frame),
});