<template>
    <div class="content">
        <div class="header">
            <div class="title">用户列表</div>

            <el-button
                type="primary"
            >新建用户</el-button>
        </div>
        <div class="table"></div>
        <div class="pagination"></div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="UserContent"
>
</script>

<style
    scoped
    lang="less"
>
    .content {
        background: #fff;
        margin-top: 20px;
        padding: 20px;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;

            .title {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
</style>