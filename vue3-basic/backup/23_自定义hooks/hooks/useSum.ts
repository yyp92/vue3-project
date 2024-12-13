import {ref, onMounted, computed} from 'vue'

export default function() {
    let sum = ref(0)
    const bigSum = computed(() => {
        return sum.value * 10
    })

    function add() {
        sum.value += 1
    }

    onMounted(() => {
        add()
    }) 

    return {
        sum,
        add,
        bigSum
    }
}
