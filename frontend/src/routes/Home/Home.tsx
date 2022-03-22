import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { filterMoviesResponse, getRandomMovie } from "../../util/Utils";
import { fetchMovies } from "../../services/movieDBcalls";
import { json } from "stream/consumers";


const Home = () => {
    
    const [user, setUser] = useState(null);
    const [movies, setMovies] = useState<Array<string>>([]); 
    const [movie, setMovie] = useState<string>();

    
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedW2WUser');
        if (loggedUser) {
            const user = JSON.parse(loggedUser);
            setUser(user.name);
            // console.log(user);
        }
    }, []);

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
            <h1>Welcome To What2Watch!</h1>
            {user 
                ? <p>Hello, {user}</p>
                : <p>You should log in!</p>
            }

            {movie ? 
                <>
                    <h2>Here is a randomized movie!</h2>
                    <MovieList movies={Array(movie)} /> 
                </>
                : <p>loading...</p>
            }
            
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