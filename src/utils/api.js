import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWYzNDFkM2IyOTdhZTliZWQ4ODA0NjgzMzVmYjNlNSIsInN1YiI6IjY1ZTM1YmIyYzk5ODI2MDE3YjYxYTg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cbHfa0HXx3BBrGNdw4m4LapQRHAI91XPUyiDOoFTjk";

const headers = {
    Authorization:
    "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi= async (url,params)=>{
    try {
        const {data}=await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
