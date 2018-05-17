<template>
    <div>
        <base-input ref="begin" placeholder="begin" type="date"></base-input>
        <base-input ref="end" placeholder="end" type="date"></base-input>
    </div>
</template>

<script>
    import baseInput from './baseInput.vue';
    import Pikaday from 'pikaday';

    export default {
        name: "app",
        components: {
            baseInput
        },
        mounted: function () {
            // this.attachPikaday('begin');
            this.attachPikaday('end');
        },
        methods: {
            attachPikaday: function (refName) {
                console.log(this.$refs[refName]);
                var pikaday = new Pikaday({
                    field: this.$refs[refName].input,
                    format: 'YYYY-MM-DD',
                    onSelect: function() {
                        console.log(this.getMoment().format('Do MMMM YYYY'));
                    }
                });

                this.$once('hook:beforeDestroy', function () {
                    // pikaday.destroy()
                })
            }
        }
    }
</script>

<style scoped>

</style>