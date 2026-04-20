import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
import { Navlink } from "../components/Navlink";
import { Querybutton } from "../components/Querybutton";
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
  const [activeName, setActiveName] = useState<string>("Now Playing");
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
      <Navlink to={`/trending/movie?interval=${interval}`} whenClicked={() => setActiveName("Trending Movies")}>
        Movies
      </Navlink>

      <Navlink to={`/trending/tv?interval=${interval}`} whenClicked={() => setActiveName("Trending TV")}>
        TV
      </Navlink>

      <Querybutton to={`/trending/${activeChoice}?interval=day`} matchParams={{ interval: "day" }}>
        Today
      </Querybutton>

      <Querybutton to={`/trending/${activeChoice}?interval=week`} matchParams={{ interval: "week" }}>
        Week
      </Querybutton>

      <h1>{activeName}</h1>
      {mediaData && <Imagegrid data={mediaData?.results} whenClicked={(id)=>{navigate(`/${chosen}/${id}`)}}/>}
    </div>
  );
}
