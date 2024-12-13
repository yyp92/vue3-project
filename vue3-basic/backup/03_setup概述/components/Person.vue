<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        // data() {
        //     return {
        //         name: '张三',
        //         age: 18,
        //         tel: '13888888888'
        //     }
        // },
        // methods: {
        //     showTel() {
        //         alert(this.tel)
        //     },
        //     changeName() {
        //         this.name = 'zhang-san'
        //     },
        //     changeAge() {
        //         this.age += 1
        //     },
        // },


        beforeCreate() {
            console.log('beforeCreate')
        },


        // setup 函数中的 this 是 undefined, vue3 中已经开始弱化 this 了
        setup() {
            console.log('setup')

            // 数据
            // 注意此时的 name,age,tel 不是响应式的
            let name = '张三'
            let age = 18
            let tel = '13888888888'

            
            // 方法
            function changeName() {
                // 注意：这样修改 name，页面是没有变化的
                name = 'zhang-san'
                // name 确实改了，但 name 不是响应式的
                console.log('name', name)
            }

            function changeAge() {
                // 注意：这样修改 age
                age += 1
                // age 确实改了，但 age 不是响应式的
                console.log('age', age)
            }

            function showTel() {
                alert(tel)
            }

            return {
                name,
                age,
                changeName,
                changeAge,
                showTel
            }
        }
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px
    }

    button {
        margin: 0 5px;
    }
</style>
