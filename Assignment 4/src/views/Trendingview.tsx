import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
import { Navlink } from "../components/Navlink";
import {  QueryButton } from "../components/Querybutton";
import { useTmdb } from "../hooks/useTMDBdata";

type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

type MediaResponse = {
  results: Media[];
  total_pages: number;
};

export default function TrendingView() {
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

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
      <Navlink to={`/trending/movie?interval=${interval}`}>
      Movies
      </Navlink>

      <Navlink to={`/trending/tv?interval=${interval}`}>
        TV
      </Navlink>
      </div>
      <div className="flex gap-3">
      <QueryButton to={`/trending/${activeChoice}?interval=day`} matchParams={{ interval: "day" }}>
        Today
      </QueryButton>

      <QueryButton to={`/trending/${activeChoice}?interval=week`} matchParams={{ interval: "week" }}>
        Week
      </QueryButton>
      </div>
      </div>
      {mediaData && <Imagegrid data={mediaData?.results} whenClicked={(id)=>{navigate(`/${chosen}/${id}`)}}/>}
    </div>
  );
}
