<template>
    <div class="father">
        <h3>父组件</h3>

        <div class="content">
            <Category title="热门游戏列表">
                <ul>
                    <li
                        v-for="g in games"
                        :key="g.id"
                    >{{ g.name }}</li>
                </ul>
            </Category>

            <Category title="今日美食城市">
                <img :src="imgUrl" alt="" />
            </Category>

            <Category title="今日影视推荐">
                <video
                    :src="videoUrl"
                    controls
                ></video>
            </Category>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="Father"
>
    import {ref, reactive} from 'vue'
    import Category from './Category.vue'

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
    let imgUrl = ref('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg')
    let videoUrl = ref('http://vjs.zencdn.net/v/oceans.mp4')
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