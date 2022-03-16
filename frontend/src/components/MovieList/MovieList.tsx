import { v4 as uuid } from 'uuid';
import MovieCard from "../MovieCard/MovieCard";


const MovieList = ({movies} : any) =>  {
    
    return (
        <>
            <ul>
                {movies.map((movie : any) => 
                    <MovieCard title={movie[0]} poster_path={movie[1]} key={uuid()}/>
                )}
            </ul>
        </>
    );
}

export default MovieList
