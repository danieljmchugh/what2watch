const MovieCard = (movie : any) => {
    
    return (
        <li>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}></img>
        </li>
    );
}

export default MovieCard
