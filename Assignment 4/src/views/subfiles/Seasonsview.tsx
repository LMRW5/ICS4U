import { useNavigate, useParams } from "react-router-dom";
import { useTmdb } from "../../hooks/useTMDBdata";
import { ImageGrid } from "../../components/ImageGrid";

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
    <ImageGrid data={tmdbData.seasons} whenClicked={(id)=>{navigate(`/tv/${id}/seasons/${season.season_number}`)}}/>
      
    </>
  );
}
