<template>
    <div class="login">
        <loginPanel />
    </div>
</template>

<script
    setup
    lang="ts"
    name="Login"
>
    import loginPanel from './c-cpns/login-panel.vue';
</script>

<style
    scoped
    lang="less"
>
    .login {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../../assets/img/login-bg.jpg') center center no-repeat;
        background-size: 100% 100%;
    }
</style>