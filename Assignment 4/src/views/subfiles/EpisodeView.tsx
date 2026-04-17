import { useNavigate, useParams } from "react-router-dom"
import { useTmdb } from "../../hooks/useTMDBdata";

type EpisodeProps = {
 air_date: string;
 overview: string;
 episodes: {
    air_date: string;
    episode_number: number;
    name: string;
    still_path: string;
    id: string;
 }[]
}


export default function EpisodeView(){
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const seasonNumber = params.seasonNumber
    const tmdbData = useTmdb<EpisodeProps>(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`, {}, []).data;
    

    if (!tmdbData) {
        return <p>Loading...</p>;
      }   

    return <>
    <h1>Season {seasonNumber}</h1>
    <p>{tmdbData.air_date}</p>
    <p>{tmdbData.overview}</p>
    <button onClick={()=>navigate(-1)}>Return</button>
    {tmdbData.episodes.map((episode) => {
      return (

          <div key={episode.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}></img>
            <p>{episode.name}</p>
            <p>{episode.air_date}</p>
          </div>
        );
    })}
  </>
}