import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { filterMoviesResponse } from "../../util/Utils";
import { fetchRecentMovies } from "../../services/movieServices";
import { getUserListIds,  } from "../../services/listServices";
import { StyledLandingPage } from './LandingPage.styled';


const LandingPage = ({user} : any) => {
    const [recentMovies, setRecentMovies] = useState<Array<string>>([]); 
    
    // Fetch recent movies
    useEffect(() => {
        fetchRecentMovies().then(resp => {
            setRecentMovies(filterMoviesResponse(resp));
        })
    }, []);
   
    
    return (
        <StyledLandingPage>
            <h1>Welcome To What2Watch!</h1>
            <img 
                id="banner" 
                src="https://thumbs.dreamstime.com/b/blue-dark-background-wide-banner-design-template-digital-illustration-164323178.jpg" 
                alt="Banner" />
            {recentMovies ? 
                <MovieList title={"Recent Movie Releases"} movies={recentMovies} />
                : <p>loading...</p>
            }
        </StyledLandingPage>
    );
  
    
}


export default LandingPage