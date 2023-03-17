export const filterMoviesResponse = (movies : any) => {
    return movies.map((movie : any) => ([movie.title, movie.poster_path, movie.id, movie.overview, movie.release_date, movie.tagline, movie.original_language]));
};

export const getRandomMovie = (movies : Array<any>) => {
    const random_id = Math.floor(Math.random() * (20));
    return movies[random_id];
};

export const getMoviesFromList = (list : any) => {
    
};