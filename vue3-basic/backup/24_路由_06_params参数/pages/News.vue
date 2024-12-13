<template>
    <div class="news">
        <ul>
            <li
                v-for="news in newsList"
                :key="news.id"
            >
                <!-- 第一种写法 -->
                <!-- <RouterLink
                    :to="`/news/detail/${news.id}/${news.title}/${news.content}`"
                >{{ news.title }}</RouterLink> -->

                <!-- 第二种写法 -->
                <RouterLink
                    :to="{
                        name: 'xiangqing',
                        params: {
                            id: news.id,
                            title: news.title,
                            content: news.content
                        }
                    }"
                >{{ news.title }}</RouterLink>
            </li>
        </ul>

        <div class="news-content">
            <RouterView />
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
    name="News"
>
    import {reactive} from 'vue'
    import {RouterView, RouterLink} from 'vue-router'

    const newsList = reactive([
        {
            id: '01',
            title: '很好的抗癌食物',
            content: '西蓝花'
        },
        {
            id: '02',
            title: '如何一夜暴富',
            content: '学IT'
        },
        {
            id: '03',
            title: '震惊，万万没想到',
            content: '明天是周一'
        },
        {
            id: '04',
            title: '好消息',
            content: '快过年了'
        },
    ])
</script>

<style scoped>
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }

    .news li::marker {
        color: #64967E;
    }

    .news li > a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #62967E;
        text-shadow: 0 0 1px rgb(0, 84, 0);
    }

    .news-content {
        margin-top: 20px;
        width: 70%;
        height: 90%;
        border: 1px solid;
        border-radius: 10px;
    }
</style>
