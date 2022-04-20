import { getUserListIds, getListContents } from "../../services/listServices";
import { fetchMovieById } from "../../services/movieServices";
import { filterMoviesResponse } from "../../util/Utils";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { v4 as uuid } from 'uuid';


const MyLists = () => {
    
    const [userLists, setUserLists] = useState<any>(null);
    const [userMovies, setUserMovies] = useState<any>(null);

    // Load in all user lists to display, if any
    useEffect(() => {
        if (userLists) {return}

        getUserListIds()
            .then(ids => {
                return ids;
            })
            .then(ids => {
                return Promise.all(ids.map(async (id : any) => await getListContents(id)))
            })
            .then(listContents => {
                setUserLists(listContents);
            })
            .catch(error => console.log('Error in getting lists:', error));
    }, [])

    // Load the movie infomation based on the lists loaded
    useEffect(() => {
        if (!userLists) {return}

        Promise.all(userLists.map((list : any) => {
            return Promise.all(list.content.map( async (id: any) => {
                return await fetchMovieById(id);
            }))
        })).then(movies => {
            const moviesFiltered = movies.map((moviesList : any) => filterMoviesResponse(moviesList)) 
            setUserMovies(moviesFiltered);
        })   
    }, [userLists])

    return (
        <>

            <h2>Create New List</h2>
            <form></form>
            
            
            
            <h2>My Lists</h2>
            {userLists && userMovies ?
                <ul>
                    {userLists.map((list : any, id : any) => {
                        return (
                            <li key={uuid()}>
                                <MovieList title={list.title} movies={userMovies[id]}/>
                            </li>
                            )
                    })}
                </ul>
                :
                <>goodbye</>

            }

        </>
    );
}


export default MyLists