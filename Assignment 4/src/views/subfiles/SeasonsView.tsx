import { ImageGrid } from "@/components";
import type { SeasonsProps } from "@/core/types";
import { useTmdb } from "@/hooks/useTMDBdata";
import { useNavigate, useParams } from "react-router-dom";

export function SeasonsView() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const tmdbData = useTmdb<SeasonsProps>(`https://api.themoviedb.org/3/tv/${id}`, {}, []).data;
  if (!tmdbData) {
    return <p>Loading...</p>;
  }
  const gridData = tmdbData.seasons.map((season) => ({
    id: season.id,
    primaryText: season.name,
    imagePath: season.poster_path,
    season_number: season.season_number,
    air_date: season.air_date,
  }));
  return (
    <section className="px-2 space-y-4">
      <h2 className="text-2xl font-bold">Seasons</h2>

      <ImageGrid
        data={gridData}
        whenClicked={(clickedId) => {
          const season = tmdbData.seasons.find((s) => s.id === clickedId);
          if (season) {
            navigate(`/tv/${id}/seasons/${season.season_number}`);
          }
        }}
      />
    </section>
  );
}
