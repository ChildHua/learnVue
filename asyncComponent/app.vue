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
        setTimeout(function () {
            require(['./async.vue'], resolve)
        }, 3000);
    });

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