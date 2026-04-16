import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
import { Navlink } from "../components/Navlink";
import Pagination from "../components/Pagination";
import { useTmdb } from "../hooks/useTMDBdata";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

type MovieResponse = {
  results: Movie[];
  total_pages: number;
};

export default function MoviesView() {
  const [page, setPage] = useState<number>(1);
  const [activeName, setActiveName] = useState<string>("Now Playing");
  const navigate = useNavigate()
  const params = useParams();
  const activeChoice = params.type;

  useEffect(() => {
    setPage(1);
  }, [activeChoice]);

  const movieData = useTmdb<MovieResponse>(
    `https://api.themoviedb.org/3/movie/${activeChoice}`,
    {
      language: "en-US",
      page: page,
    },
    [page, activeChoice]
  ).data;

  return (
    <div>
      <Navlink to="/movies/category/now_playing" whenClicked={() => setActiveName("Now Playing")}>
        Now Playing
      </Navlink>

      <Navlink to="/movies/category/upcoming" whenClicked={() => setActiveName("Upcoming")}>
        Upcoming
      </Navlink>

      <Navlink to="/movies/category/top_rated" whenClicked={() => setActiveName("Top Rated")}>
        Top Rated
      </Navlink>

      <Navlink to="/movies/category/popular" whenClicked={() => setActiveName("Popular")}>
        Popular
      </Navlink>

      <h1>{activeName}</h1>

      {movieData && (
        <>
          <Imagegrid data={movieData?.results} whenClicked={(id) => navigate(`/movies/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, movieData.total_pages)} />
        </>
      )}
    </div>
  );
}
