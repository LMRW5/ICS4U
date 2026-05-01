import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ImageGrid } from "../../components";
import { useTmdb } from "../../hooks/useTMDBdata";
import type { CreditsProps } from "../types";

export function Creditsview() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const location = useLocation();
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
  const tmdbData = useTmdb<CreditsProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/credits`, {}, []).data?.cast;
  const gridData = tmdbData?.map((credit) => ({
    id: credit.id,
    primaryText: credit.name,
    secondaryText: credit.character,
    imagePath: credit.profile_path,
  }));
  if (gridData && gridData.length != 0) {
    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Credits</h2>
        <ImageGrid data={gridData} whenClicked={(id) => { navigate(`/person/${id}`); }} />
      </section>
    );
  } else {
    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Credits</h2>
        <h2 className="text-gray-400 text-center">No Credits Found</h2>
      </section>
    );
  }
}
