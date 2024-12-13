import {reactive, onMounted} from 'vue'
import axios from 'axios';
// https://dog.ceo/api/breed/pembroke/images/random

export default function() {
    const dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    
    async function getDog() {
        try {
            const result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }
        catch(error) {
            alert(error)
        }
    }

    onMounted(() => {
        getDog()
    })

    // 向外部提供东西
    return {
        dogList,
        getDog
    }
}
