let BASE_URL = ''

if (import.meta.env.PROD) {
    BASE_URL = 'http://codercba.com:5000'
}
else {
    BASE_URL = 'http://123.207.32.32:5000'
}


export const TIME_OUT = 10000
export {BASE_URL}
