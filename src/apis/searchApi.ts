import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6',
    params: {
        access_token: process.env.VUE_APP_API_TOKEN,
        language: 'es',
        limit: 5,
    }
})

export default searchApi;