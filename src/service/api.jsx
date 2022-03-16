import axios from "axios";

const api = axios.create({
    baseURL: "https://6077803e1ed0ae0017d6aea4.mockapi.io/",
});

export default api;