import axios from 'axios';
import API_KEY from "../api/API_KEY.json";

const api_key = API_KEY.key;


export const fetchMovies = async ()  => {
    
    const url : string = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    const movies = await axios(url);
    return movies.data.results;
}

