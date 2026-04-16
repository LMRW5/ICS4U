import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navlink } from "../components/Navlink";
import Pagination from "../components/Pagination";
import { useTmdb } from "../hooks/useTMDBdata";

type TV = {
  id: number;
  name: string;
  poster_path: string;
};

type TVResponse = {
  results: TV[];
  total_pages: number;
};

export default function TelevisionView() {
  const [page, setPage] = useState<number>(1);
  const [activeName, setActiveName] = useState<string>("Airing Today");

  const params = useParams();
  const activeChoice = params.type;

  useEffect(() => {
    setPage(1);
  }, [activeChoice]);

  const TVData = useTmdb<TVResponse>(
    `https://api.themoviedb.org/3/tv/${activeChoice}`,
    {
      language: "en-US",
      page: page,
    },
    [page, activeChoice]
  ).data;

  return (
    <div>
      <Navlink
        to="/tv/category/airring_today"
        whenClicked={() => setActiveName("Airring Today")}
      >
        Airring Today
      </Navlink>

      <Navlink
        to="/tv/category/on_the_air"
        whenClicked={() => setActiveName("On The Air")}
      >
        On The Air
      </Navlink>

      <Navlink
        to="/tv/category/top_rated"
        whenClicked={() => setActiveName("Top Rated")}
      >
        Top Rated
      </Navlink>

      <Navlink
        to="/tv/category/popular"
        whenClicked={() => setActiveName("Popular")}
      >
        Popular
      </Navlink>

      <h1>{activeName}</h1>

      {TVData &&
        TVData.results.map((tv) => (
          <div key={tv.id}>
            <h2>{tv.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`}
              alt={tv.name}
            />
          </div>
        ))}

      {TVData && (
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={Math.min(500, TVData.total_pages)}
        />
      )}
    </div>
  );
}