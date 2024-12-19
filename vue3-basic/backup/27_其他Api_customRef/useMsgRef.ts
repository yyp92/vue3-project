import {customRef} from 'vue'


export default function(initValue: string, delay: number) {
    // 使用 vue 提供的 customRef 定义响应式数据
    let timer: number

    // track: 跟踪， trigger: 触发
    let msg = customRef((track, trigger) => {
        return {
            //  get 何时被调用： msg 被读取时
            get() {
                // 告诉 vue 数据 msg 很重要，你要对 msg 进行持续关注，一旦 msg 变化就去更新
                track()

                return initValue
            },

            //  set 何时被调用： msg 被修改时
            set(value) {
                clearInterval(timer)
                
                timer = setTimeout(() => {
                    initValue = value

                    // 通知 vue 一下，数据 msg 变化了
                    trigger()
                }, delay)
            }
        }
    })

    return {
        msg
    }
}
