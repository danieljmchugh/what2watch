import { StyledMovieCard } from "./MovieCard.styled";

const MovieCard = (movie : any) => {
    
    return (
        <StyledMovieCard>
            <h3>{movie.title}</h3>
            <img 
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={`Movie poster for ${movie.title}`}>
            </img>
        </StyledMovieCard>
    );
}

export default MovieCard
