<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    
    import '@/assets/js/flexible.js'
    import '@/assets/js/iconfont.js'

    export default {
        name: 'app'
    }

</script>

<style lang="scss">

    @import 'assets/css/flexible.css';
    @import 'assets/css/mintUI.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        .icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }

</style>
