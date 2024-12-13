import {defineStore} from 'pinia'

export const useCountStore = defineStore(
    'count',
    {
        // 真正存储数据的地方
        state() {
            return {
                sum: 1,
                school: 'atguigu',
                address: '宏福科技园'
            }
        },

        // actions 里面放置的是一个一个的方法，用于响应组件中的 “动作”
        actions: {
            increment(value: any) {
                // 修改数据（this 是当前的 store）
                this.sum += value
            }
        },

        getters: {
            // bigSum(state) {
            //     return state.sum * 10
            // },
            bigSum: state => state.sum * 10,

            // upperSchool(state) {
            //     return this.school.toUpperCase()
            // }
            upperSchool(): string {
                return this.school.toUpperCase()
            }
        }
    }
)
