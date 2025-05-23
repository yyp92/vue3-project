import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore(
    'talk',
    {
        // 真正存储数据的地方
        state() {
            return {
                talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
            }
        },

        actions: {
            async getAtalk() {
                const {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

                const obj = {
                    id: nanoid(),
                    title
                }

                this.talkList.unshift(obj)
            }
        }
    }
)
