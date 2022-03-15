import { Suspense, useEffect, useState } from "react";
import axios from 'axios';

import API_KEY from "../Home/API_KEY.json";


const Home = () => {
    
    const api_key = API_KEY.key;
    const [movie, setMovie] = useState<string>();
    const [moviePoster, setMoviePoster] = useState<string>();

    const fetchRandomMovie = () => {
        const random_id = Math.floor(Math.random() * (20));

        const url : string = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

        axios
            .get(url)
            .then(resp => {                
                console.log(resp.data.results[random_id]);

                setMovie(resp.data.results[random_id].title);
                setMoviePoster(resp.data.results[random_id].poster_path);
            })
            .catch(err => {
                console.error(err);
                return null;
            })
    }

    useEffect(fetchRandomMovie, []);
    
    return (
        <>
            <h1>Welcome to WHAT2WATCH</h1>
            <h2>Here is a randome movie!</h2>
            
            <h3>{movie}</h3>
            <img src={`https://image.tmdb.org/t/p/w185${moviePoster}`}></img>
        </>
    );
}


export default Home