import axios from "axios";


//TODO:base url to make requests to the movie DB 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

instance.get('/foo-bar');

export default instance;