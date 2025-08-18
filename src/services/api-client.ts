import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2b10cc05fd37433597f39ced33e54be3'
    }
})