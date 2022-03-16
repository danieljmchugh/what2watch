import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { filterMoviesResponse, getRandomMovie } from "../../util/Utils";
import { fetchMovies } from "../../services/MovieDBcalls";


const Home = () => {
    
    const [movies, setMovies] = useState<Array<string>>([]); 
    const [movie, setMovie] = useState<string>();

    
    // Random Movie
    useEffect(() => {
        fetchMovies().then(resp => {
            setMovie(getRandomMovie(filterMoviesResponse(resp)));
        })
    }, []);
    
    // Discory Movie List
    useEffect(() => {
        fetchMovies().then(resp => {
            setMovies(filterMoviesResponse(resp));
        })
    }, []);
    
    return (
        <>
            <h1>Welcome to WHAT2WATCH</h1>
            {/* Render a randomized movie, placed in an array as that is what MovieLists expects */}
            {movie ? 
                <>
                    <h2>Here is a randomized movie!</h2>
                    <MovieList movies={Array(movie)} /> 
                </>
                : <p>loading...</p>
            }
            
            {/* Render a list of movies*/}
            {movies !== undefined ? 
                <>
                    <h2>Discover more movies!</h2> 
                    <MovieList movies={movies} />
                </>
                : <p>loading...</p>
            }
        </>
    );
  
    
}


export default Home