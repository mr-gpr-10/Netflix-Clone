import axios from "axios";

// these are similar to postman
// creating instance of axios
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;