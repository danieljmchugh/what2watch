import { v4 as uuid } from 'uuid';
import MovieCard from "../MovieCard/MovieCard";


const MovieList = ({title, movies} : any) =>  {
    
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {movies.map((movie : any) => 
                    <MovieCard title={movie[0]} poster_path={movie[1]} id={movie[2]} key={uuid()}/>
                )}
            </ul>
        </>
    );
}

export default MovieList
