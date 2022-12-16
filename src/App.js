import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import Header from './components/Header'
const Featured_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=38d0409f65543e3dd6d22adbccdefa20"
const Search = "https://api.themoviedb.org/3/search/movie?&api_key=38d0409f65543e3dd6d22adbccdefa20&query="
const App = () => { 
  const [movies, setmovies] = useState([]); 
  const [searchTerm, setsearchTerm] = useState('')
  
   const submitBtn = (e) =>{
    if(searchTerm === ""){
      alert('Enter Somethings')
    }else{
    e.preventDefault();
    fetch(Search+searchTerm).then(res => res.json()).then(data => setmovies(data.results) )
    }
    setsearchTerm('')
}
const handlerBtn = (e) => {
    setsearchTerm(e.target.value)
}
  useEffect(() => {
    fetch(Featured_api).then(res => res.json()).then(data => setmovies(data.results))
  }, [])
  return ( 
    <>  
       <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
  <a className="navbar-brand" href="#"><img className="logo" src="./logo.png"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form onSubmit={submitBtn} className="form-inline my-2 my-lg-0">
      <input onChange={handlerBtn} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      <div className="d-inline-flex box">
        
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
      ))}
      </div>
    </>

   );
}
 
export default App;