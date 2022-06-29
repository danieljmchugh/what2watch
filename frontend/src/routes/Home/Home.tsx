import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { filterMoviesResponse } from "../../util/Utils";
import { fetchDiscoverMovies, fetchMovieById } from "../../services/movieServices";
import { getUserListIds, getListContents } from "../../services/listServices";
import { StyledHome } from "./Home.styled";


const Home = ({user} : any) => {
    
    const [userList, setUserList] = useState<any>(null);
    const [userMovies, setUserMovies] = useState<any>(null);
    const [discoverMovies, setDiscoverMovies] = useState<Array<string>>([]); 
    

    // Discovery Movie List
    useEffect(() => {
        fetchDiscoverMovies().then(resp => {
            setDiscoverMovies(filterMoviesResponse(resp));
        })
    }, []);
   
    const setRandomUserList = async () => {
        
        const list_ids = await getUserListIds();
        const randomId = list_ids[Math.floor(Math.random() * list_ids.length)];
        const list = await getListContents(randomId);
        
        setUserList(list)
    }

    const getMoviesFromList = async () => {

        const movie_ids = userList.content;
        const movies = Promise.all(movie_ids.map( async (id : any) => await fetchMovieById(id)));

        return movies;
    }
    
    const setRandomUserMovies = (movies : any) => {
        const filteredMovies = filterMoviesResponse(movies);
        setUserMovies(filteredMovies);
    }

    useEffect(() => {
        if (!user) return 

        setRandomUserList()
    }, [user])

    useEffect(() => {
        if (!userList) return 

        getMoviesFromList().then((movies) => {
            setRandomUserMovies(movies)
        }).catch(error => console.error(error))

    }, [userList])

    return (
        <StyledHome>
            <h1>Welcome To What2Watch!</h1>
            {user ?
                <>
                    <h2>{user.name}'s list</h2>
                    {userMovies ?
                        <>
                            <MovieList title={userList.title} movies={userMovies} />
                        </>
                        :<p>No lists!</p>
                    }
                </>
                :null
            }

            {discoverMovies ? 
                <MovieList title={"Discover more movies!"} movies={discoverMovies} />
                : <p>loading...</p>
            }
        </StyledHome>
    );
  
    
}


export default Home