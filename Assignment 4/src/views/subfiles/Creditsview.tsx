import { useLocation, useParams } from "react-router-dom";
import { ImageGrid } from "../../components/ImageGrid";
import { useTmdb } from "../../hooks/useTMDBdata";

type CreditsProps = {
  cast: {
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }[];
};

export default function Creditsview() {
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
  const tmdbData = useTmdb<CreditsProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/credits`, {}, []).data?.cast;
  if (tmdbData && tmdbData.length != 0) {
    return (
      <>
        <ImageGrid data={tmdbData} />
      </>
    );
  } else {
    return <h2>No Credits Found</h2>;
  }
}
