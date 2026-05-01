import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ImageGrid, LinkGroup, ButtonGroup } from "../../components";
import { useTmdb } from "../../hooks/useTMDBdata";
import type { MovieResponse, TVResponse } from "../types";

type MediaResponse = MovieResponse | TVResponse;

export function TrendingView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const params = useParams();
  const activeChoice = params.type;
  const interval = searchParams.get("interval") ?? "day";
  const chosen = activeChoice == "movie" ? "movies" : "tv"

  useEffect(() => {
    if (!searchParams.get("interval")) {
      setSearchParams({ interval: "day" });
    }
  }, [activeChoice]);

  const mediaData = useTmdb<MediaResponse>(
    `https://api.themoviedb.org/3/trending/${activeChoice}/${interval}`,
    {
      language: "en-US",
    },
    [activeChoice, interval]
  ).data;
  const gridData = mediaData?.results.map((media) => ({
    id: media.id,
    primaryText: 'title' in media ? media.title : media.name,
    imagePath: media.poster_path,
  }));

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-3">
      <div className="flex items-center justify-between">
        <LinkGroup links={[{ label: "Movies", to: `/trending/movie?interval=${interval}` }, { label: "TV", to: `/trending/tv?interval=${interval}` }]} />
        <ButtonGroup buttons={[{ label: "Today", to: `/trending/${activeChoice}?interval=day`, matchParams: { interval: "day" } }, { label: "Week", to: `/trending/${activeChoice}?interval=week`, matchParams: { interval: "week" } }]} />
      </div>
      {gridData && mediaData && <ImageGrid data={gridData} whenClicked={(id) => { navigate(`/${chosen}/${id}`) }} />}
    </section>
  );
}
