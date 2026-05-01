import { useNavigate, useParams } from "react-router-dom";
import { useTmdb } from "@/hooks/useTMDBdata";
import { ImageGrid } from "@/components";
import type { CareerProps } from "@/views/types";

export function CareerView() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const tmdbData = useTmdb<CareerProps>(
    `https://api.themoviedb.org/3/person/${id}/movie_credits
`,
    {},
    []
  ).data?.cast;
  const gridData = tmdbData?.map((credit) => ({
    id: credit.id,
    primaryText: credit.title,
    secondaryText: credit.character,
    imagePath: credit.poster_path,
  }));
  if (gridData && gridData.length != 0) {
    return (
      <section className="max-w-[1200px] mx-auto p-5 space-y-3">
        <ImageGrid data={gridData} whenClicked={(id) => { navigate(`/movies/${id}`) }} />
      </section>
    );
  } else {
    return <h2>No Movies Found</h2>;
  }
}
