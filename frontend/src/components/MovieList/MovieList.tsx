import { v4 as uuid } from 'uuid';
import MovieCard from "../MovieCard/MovieCard";


const MovieList = (movies : any) =>  {

    // console.log(movies.movies);
    
    return (
        <>
            <ul>
                {movies.movies.map((movie : any) => 
                    <MovieCard title={movie[0]} poster_path={movie[1]} key={uuid()}/>
                    // console.log(`title: ${movie[0]}, poster: ${movie[1]}`)   
                )}
            </ul>
        </>
        
    );
}

export default MovieList
