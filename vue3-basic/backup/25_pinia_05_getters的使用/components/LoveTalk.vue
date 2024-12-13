<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        
        <ul>
            <li
                v-for="talk in talkList"
                :key="talk.id"
            >{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script
    lang="ts"
    setup
    name="LoveTalk"
>
    import {reactive} from 'vue'
    import axios from 'axios'
    import {nanoid} from 'nanoid'
    import {storeToRefs} from 'pinia'
    import {useTalkStore} from '../store/loveTalk'

    const talkStore = useTalkStore()
    const {talkList} = storeToRefs(talkStore)


    function getLoveTalk() {
        talkStore.getAtalk()
    }
</script>

<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>
