import { useNavigate, useParams } from "react-router-dom";
import { useTmdb } from "../../hooks/useTMDBdata";

type SeasonsProps = {
  number_of_seasons: number;
  seasons: {
    id: number;
    name: string;
    poster_path: string;
    season_number: number;
    air_date: string;
  }[];
};
export default function SeasonsView() {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const tmdbData = useTmdb<SeasonsProps>(`https://api.themoviedb.org/3/tv/${id}`, {}, []).data;
  if (!tmdbData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {tmdbData.seasons.map((season) => {
        return (
          season.season_number > 0 && (
            <div key={season.id} onClick={()=> navigate(`/tv/${id}/seasons/${season.season_number}`)}>
              <img src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}></img>
              <p>{season.name}</p>
              <p>{season.air_date}</p>
            </div>
          )
        );
      })}
    </>
  );
}
