import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FilmCard from '../components/FilmCard';
import MovieNotFound from '../components/MovieNotFound';

function FilmsPage() {
  
  const location = useLocation();
  const [films, setFilms] = useState([]);

  const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie?&language=en-US";
  const API_KEY = "e1bc947a2e4d2cc75b47d223ad80b8da"

  const query = new URLSearchParams(location.search)
  const genreIds = query.get("genres")?.split(",").map(id => parseInt(id))

  const fetchMovies = async (genreIds) => {

    try {
      const response = await axios.get(API_BASE_URL, {
      params: {
        api_key: API_KEY,
        with_genres: genreIds.join(","),
        language: "en-US"
      }      
    })
    // console.log(response.data.results)  
    setFilms(response.data.results);

    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    if (genreIds.length > 0) {
      fetchMovies(genreIds);
    }
  }, [location.search]);


  return (
    <main className={films.length > 0 ? "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 p-10 md:px-[200px] px-[70px]" : "flex justify-center"}>
      {
        films.length > 0 ? 
        (films && films.map((film) => {
          return(
            <FilmCard 
            key={film.id}
            id={film.id}
            title={film.original_title} 
            poster={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
            genres={film.genre_ids}
            released_date={film.release_date}
            vote={film.vote_average}/>

          )
        })) : <MovieNotFound/>
      }
    
    
    </main>
  )
}

export default FilmsPage