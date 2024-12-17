// 引入 mitt
import mitt from "mitt"

// 调用 mitt，得到 emitter, emitter能绑定事件，触发事件
const emitter = mitt()

// 暴露 emitter
export default emitter
