export const filterMoviesResponse = (resp : any) => {
    return resp.map((movie : any) => ([movie.title, movie.poster_path]));
}

export const getRandomMovie = (movies : Array<any>) => {
    const random_id = Math.floor(Math.random() * (20));
    return movies[random_id];
}

