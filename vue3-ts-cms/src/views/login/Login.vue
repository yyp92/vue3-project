<template>
    <div class="login">
        <h2>login</h2>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Login"
>
    import hyRequest from '@/service'

    hyRequest
        .get({
            url: '/home/multidata'
        })
        .then((res) => {
            console.log('res', res)
        })
</script>

<style
    scoped
    lang="less"
>
    .login {
        color: red;
    }
</style>