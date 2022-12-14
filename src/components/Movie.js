import { useEffect, useState } from "react";
import Movie2 from "./Movie2";

function Movie(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        // const response = await fetch(`https://ytx.mx/zpi/v2/list_movies.json?minimum_rating=8.5&`);
        // const json = await response.json();
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (<div>
        {loading ? 
        <h1>Loading...</h1> : 
        (<div>
            {movies.map((movie) => 
                <Movie2
                    key={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            )}
        </div>
        )}
    </div>);
}

export default Movie;