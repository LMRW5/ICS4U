import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Pagination from "../components/Pagination"

type Movie = {
  id: number
  title: string
  poster_path: string
}
type MovieResponse = {
  results: Movie[]
  total_pages: number
}

type MovieGenreProps = {
    activeName: string
}


export default function Moviegenre({ activeName}: MovieGenreProps) {
    const [movieData, setMovieData] = useState<MovieResponse | null>(null)
    const [page,setPage] = useState<number>(1)
    const params = useParams()
    const activeChoice = params.type


    const API_KEY = import.meta.env.VITE_TMDB_API_KEY
    useEffect(()=>{
      const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${activeChoice}`,
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page
      }
    }

      axios.request(options).then((res) => {
        console.log("res"+ res)
        setMovieData(res.data)
      }
    ).catch(err => console.error(err));
    },[page, activeChoice])
    return (<>

    <h1>{activeName}</h1>
    {movieData && movieData.results.map((movie)=>{

        return (<>
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
        </div>
        
        </>)

      })}
      {movieData && (
        <Pagination setPage={setPage} page={page} totalPages={movieData!.total_pages} />)}
    </>)
}

