<template>
    <div class="game">
        <h2>热门游戏列表</h2>

        <slot
            :games="games"
            x="哈哈"
            y="你好"
        ></slot>

        <!-- <ul>
            <li
                v-for="g in games"
                :key="g.id"
            >{{ g.name }}</li>
        </ul> -->
    </div>
</template>

<script
    setup
    lang="ts"
    name="Game"
>
    import {reactive} from 'vue'

    let games = reactive([
        {
            id: '01',
            name: '英雄联盟'
        },
        {
            id: '02',
            name: '王者荣耀'
        },
        {
            id: '03',
            name: '红色警戒'
        },
        {
            id: '04',
            name: '斗罗大陆'
        },
    ])
</script>

<style scoped>
    .game {
        width: 200px;
        height: 300px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    h2 {
        background: orange;
        text-align: center;
    }
</style>