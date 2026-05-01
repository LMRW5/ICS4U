import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid, LinkGroup, Pagination } from "../../components";
import { useTmdb } from "../../hooks/useTMDBdata";
import type { MovieResponse } from "../types";


export function MoviesView() {
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
  const gridData = movieData?.results.map((movie) => ({
    id: movie.id,
    primaryText: movie.title,
    imagePath: movie.poster_path,
  }));
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

      {gridData && movieData && (
        <>
          <ImageGrid data={gridData} whenClicked={(id) => navigate(`/movies/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, movieData.total_pages)} />
        </>
      )}
    </section>
  );
}
