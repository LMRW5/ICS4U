import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid } from "../components/ImageGrid";
import LinkGroup from "../components/LinkGroup";
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
  const navigate = useNavigate();
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
    <section className="max-w-[1200px] mx-auto p-5 space-y-3">
      <LinkGroup
        links={[
          { label: "Now Playing", to: "/movies/category/now_playing" },
          { label: "Upcoming", to: "/movies/category/upcoming" },
          { label: "Top Rated", to: "/movies/category/top_rated" },
          { label: "Popular", to: "/movies/category/popular" },
        ]}
      />

      {movieData && (
        <>
          <ImageGrid data={movieData?.results} whenClicked={(id) => navigate(`/movies/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, movieData.total_pages)} />
        </>
      )}
    </section>
  );
}
