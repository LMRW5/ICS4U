import axios from "axios"
import { useState } from "react"

export default function Nowplayingview() {
    const [nowPlaying, setNowPlaying] = useState(null)
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODYzMGUzMzk5NzAwMmI4ZGViYjMxMGM3MTEyMDFlYyIsIm5iZiI6MTc3NjE4OTg5Ni4yOTUsInN1YiI6IjY5ZGU4MWM4NjQwMWI2ZjhhOWI2NjQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FQuNWznmr0BZSrWiSV7nCUiPZ8lirMtzG1z0YlJuFa0'
  }
};
axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => setNowPlaying(response.data))
  .catch(err => console.error(err));
    return (<>

    <h1>Now Playing</h1>

    </>)
}