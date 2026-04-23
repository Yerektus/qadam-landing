import axios from "axios";

const apiUrl = import.meta.env.PUBLIC_API_URL

export const request = axios.create({
    baseURL: apiUrl,
})