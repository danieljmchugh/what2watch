import Popup from 'reactjs-popup';
import { StyledMovieCard, StyledPopup } from "./MovieCard.styled";
import 'reactjs-popup/dist/index.css';

const MovieCard = (movie : any) => {
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    return (
        <StyledPopup 
            trigger={
                <StyledMovieCard>
                    <h3>{movie.title}</h3>
                    <img 
                        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        alt={`Movie poster for ${movie.title}`}>
                    </img>
                </StyledMovieCard>
            }
            position="right center"
            modal
            lockScroll
            >
            
            <>
                <h3>{movie.title}</h3>
                <div className="movieContent">
                    <img 
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={`Movie poster for ${movie.title}`}>
                    </img>
 
                    <ul>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Original Language: {movie.original_language}</p>
                        <p>Overview: {movie.overview}</p>
                    </ul>
                </div>
            </>
        </StyledPopup>
    );
}

export default MovieCard
