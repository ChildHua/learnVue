<template>
    <div>
        {{message}}
        <template v-if="show">
            <later></later>
        </template>
        <button @click="toggle">加载</button>
    </div>
</template>
<script>
    import Vue from 'vue';
    const asyncComponent = Vue.component('later', function (resolve) {
            require(['./async.vue'], resolve)
    });

    // const asyncComponent = () => ({
    //     // 需要加载的组件 (应该是一个 `Promise` 对象)
    //     component: require('./async.vue'),
    //     // 异步组件加载时使用的组件
    //     loading: '',
    //     // 加载失败时使用的组件
    //     error: '',
    //     // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    //     delay: 200,
    //     // 如果提供了超时时间且组件加载也超时了，
    //     // 则使用加载失败时使用的组件。默认值是：`Infinity`
    //     timeout: 3000
    // });

    // const asyncComponent = Vue.component(
    //     'async-webpack-example',
    //     // 这个 `import` 函数会返回一个 `Promise` 对象。
    //     () => import('./async.vue')
    // );

    export default {
        data: function () {
            return {
                message: 'async-test',
                show: false
            };
        },
        components: {
            asyncComponent,
        },
        created: function () {

        },
        mounted: function () {
        },
        computed: {},
        methods: {
            toggle: function () {
                this.show = !this.show;
            }
        },
    }
</script>
<style>
</style>