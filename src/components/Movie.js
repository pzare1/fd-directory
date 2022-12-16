import React from 'react';
const Images = "https://image.tmdb.org/t/p/w1280"
const movieRate =  (item) => {
    if(item > 8){
        return 'green'
    }
    else if(item < 8 && item > 5){
        return 'yellow'
    }
    if(item < 5){
        return 'red'
    }
} 

const Movie = ({title,poster_path,overview,vote_average}) => {
    return ( 
        <div className="movie"> 
            <img src={poster_path ? (Images + poster_path) : `https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`} />
            <div className="infomovie">
                <span>{title}</span>
                <span className={`tag ${movieRate(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movieover"> 
                <p>{overview}</p>
            </div>
        </div>
     );
}
 
export default Movie;