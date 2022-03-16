const MovieCard = (movie : any) => {
    // console.log(movie)
    return (
        
        <li>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}></img>
        </li>
    );
}

export default MovieCard
