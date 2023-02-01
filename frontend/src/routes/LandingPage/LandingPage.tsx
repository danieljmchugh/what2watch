import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { filterMoviesResponse } from "../../util/Utils";
import { fetchDiscoverMovies } from "../../services/movieServices";
import { getUserListIds,  } from "../../services/listServices";
import { StyledLandingPage } from './LandingPage.styled';


const LandingPage = ({user} : any) => {
    const [discoverMovies, setDiscoverMovies] = useState<Array<string>>([]); 
    
    // Discovery Movie List
    useEffect(() => {
        fetchDiscoverMovies().then(resp => {
            setDiscoverMovies(filterMoviesResponse(resp));
        })
    }, []);
   
    
    return (
        <StyledLandingPage>
            <h1>Welcome To What2Watch!</h1>
            <img src="https://yc.cldmlk.com/1t5ej9g3h321ae8wvt5fz2gz64/1671799287229_TheaterWebsiteCarousel33.png" alt="Banner" />
            {/*{discoverMovies ? 
                <MovieList title={"Discover more movies!"} movies={discoverMovies} />
                : <p>loading...</p>
            }*/}
        </StyledLandingPage>
    );
  
    
}


export default LandingPage