<!-- 作用域插槽 -->
<template>
    <div class="father">
        <h3>父组件</h3>

        <div class="content">
            <Game>
                <template v-slot="params">
                    <ul>
                        <li
                            v-for="g in params.games"
                            :key="g.id"
                        >{{ g.name }}</li>
                    </ul>
                </template>
            </Game>

            <Game>
                <template v-slot="params">
                    <ol>
                        <li
                            v-for="g in params.games"
                            :key="g.id"
                        >{{ g.name }}</li>
                    </ol>
                </template>
            </Game>

            <Game>
                <template v-slot="{games}">
                    <h3
                        v-for="g in games"
                        :key="g.id"
                    >{{ g.name }}</h3>
                </template>
            </Game>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Father"
>
    import {ref, reactive} from 'vue'
    import Game from './Game.vue'
</script>

<style scoped>
    .father {
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }

    img {
        width: 200px;
    }

    video {
        width: 200px;
    }
</style>