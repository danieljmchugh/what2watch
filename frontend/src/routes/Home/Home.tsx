import { Suspense, useEffect, useState } from "react";
import axios from 'axios';
import MovieList from "../../components/MovieList/MovieList";

import API_KEY from "../../api/API_KEY.json";


const Home = () => {
    
    const api_key = API_KEY.key;

    const [movies, setMovies] = useState(); 
    const [movie, setMovie] = useState();
    const [moviePoster, setMoviePoster] = useState();

    
    const fetchMovieList = () => {
        const url : string = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        axios
            .get(url)
            .then(resp => {                
                const movie_list = resp.data.results.map((movie : any) => [movie.title, movie.poster_path]);
                setMovies(movie_list);
            })
            .catch(err => {
                console.error(err);
                return null;
            })
    }

    const fetchRandomMovie = () => {
        const random_id = Math.floor(Math.random() * (20));

        const url : string = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        axios
            .get(url)
            .then(resp => {                
                setMovie(resp.data.results[random_id].title);
                setMoviePoster(resp.data.results[random_id].poster_path);
            })
            .catch(err => {
                console.error(err);
                return null;
            })
    }

    useEffect(fetchRandomMovie, []);
    useEffect(fetchMovieList, []);
    
    return (
        <>
            <h1>Welcome to WHAT2WATCH</h1>
            {/* Render a list of movies*/}
            {movies !== undefined ? 
                <>
                    <h2>Discover more movies!</h2> 
                    <MovieList movies={movies} />
                </>
                : <p>loading...</p>
            }

            {/* Render a randomized movie */}
            {movie && moviePoster ? 
                <>
                    <h2>Here is a randomized movie!</h2>
                    <MovieList movies={Array([movie, moviePoster])} />
                </>
                : <p>loading...</p>
            }
        </>
    );
  
    
}


export default Home