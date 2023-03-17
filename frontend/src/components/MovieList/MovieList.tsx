import { v4 as uuid } from 'uuid';

import MovieCard from "../MovieCard/MovieCard";
import { StyledMovieList } from './MovieList.styled';

const MovieList = ({title, movies} : any) =>  {
    
    return (
        <StyledMovieList>
            <h2>{title}</h2>
            <ul>
                {movies.map((movie : any) => 
                    <MovieCard 
                        title={movie[0]} 
                        poster_path={movie[1]} 
                        id={movie[2]} 
                        overview={movie[3]} 
                        release_date={movie[4]} 
                        lagline={movie[5]} 
                        original_language={movie[6]}
                        key={uuid()}/>
                )}
            </ul>
        </StyledMovieList>
    );
}

export default MovieList
