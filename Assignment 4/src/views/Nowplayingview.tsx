import axios from "axios"
import { useEffect, useState } from "react"

type Movie = {
  id: number
  title: string
  poster_path: string
}
type MovieResponse = {
  results: Movie[]
  total_pages: number
}


export default function Nowplayingview() {
    const [nowPlaying, setNowPlaying] = useState<MovieResponse | null>(null)
    const [page,setPage] = useState<number>(1)
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY
    useEffect(()=>{
      const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page
      }
    }

      axios.request(options).then((res) => {
        console.log("res"+ res)
        setNowPlaying(res.data)
      }
    ).catch(err => console.error(err));
    },[page])
    console.log("NowPLaying:" + nowPlaying)
    return (<>

    <h1>Now Playing</h1>
    {nowPlaying && nowPlaying.results.map((movie)=>{

        return (<>
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
        </div>
        
        </>)

      })}
      {nowPlaying && (
        <>
    <button onClick={()=>setPage(1)}>First</button>
    <button onClick={()=>setPage(Math.max(1,page - 1))}>Prev</button>
    <h2>Page {page}/{nowPlaying?.total_pages}</h2>
    <button onClick={()=>setPage(Math.min(nowPlaying!.total_pages,page + 1))}>Next</button>
    <button onClick={()=>setPage(nowPlaying!.total_pages)}>Last</button>
    </>)}
    </>)
}