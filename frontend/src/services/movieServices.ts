import axios from 'axios';
import API_KEY from "./API_KEY.json";

const api_key = API_KEY.key;


export const fetchRecentMovies = async ()  => {
    
    const url : string = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    const movies = await axios.get(url);
    return movies.data.results.slice(0, 8);
}

export const fetchMovieById = async (movie_id : any)  => {
    
    const url : string = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`;

    const movie = await axios.get(url);
    return movie.data;
}
