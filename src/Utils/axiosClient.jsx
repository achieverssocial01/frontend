import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:8089",
    // withCredentials:true,

    
});

export const baseURL= 'http://localhost:8089';