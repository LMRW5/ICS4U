import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid } from "../components/ImageGrid";
import LinkGroup from "../components/LinkGroup";
import Pagination from "../components/Pagination";
import { useTmdb } from "../hooks/useTMDBdata";

type MediaGenres = {
  results: {
    id: number;
    title: string;
    poster_path: string;
  }[];
  total_pages: number;
};

export default function Genreview() {
  const [page, setPage] = useState<number>(1);
  const params = useParams();
  const activeChoice = params.type;
  const activeGenre = params.mediaGenre;
  const chosen = activeChoice == "movie" ? "movies" : "tv";
  const navigate = useNavigate();

  const MOVIE_GENRES = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Crime", id: 80 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Mystery", id: 9648 },
    { name: "Sci-Fi", id: 878 },
  ];

  const TV_GENRES = [
    { name: "Action", id: 10759 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Kids", id: 10762 },
    { name: "Mystery", id: 9648 },
    { name: "Sci-Fi", id: 10765 },
  ];
  const genres = activeChoice == "tv" ? TV_GENRES : MOVIE_GENRES;
  const genreID = genres.find((g) => {
    return g.name.toLowerCase() === activeGenre?.toLowerCase();
  })?.id;
  const tmdbData = useTmdb<MediaGenres>(`https://api.themoviedb.org/3/discover/${activeChoice}`, { with_genres: genreID, page: page }, [
    activeChoice,
    activeGenre,
    page,
  ]).data;

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-3">
      <LinkGroup
        links={[
          {
            label: "Movies",
            to: "/genre/movie/action",
            match: "/genre/movie/*",
            whenClicked: () => {
              setPage(1);
            },
          },
          {
            label: "TV",
            to: "/genre/tv/action",
            match: "/genre/tv/*",
            whenClicked: () => {
              setPage(1);
            },
          },
        ]}
      />
      <LinkGroup
        links={
          genres &&
          genres.map((genre) => ({ label: genre.name, to: `/genre/${activeChoice}/${genre.name}`, whenClicked: () => setPage(1) }))
        }
      />
      {tmdbData && (
        <>
          <ImageGrid
            data={tmdbData.results}
            whenClicked={(id) => {
              navigate(`/${chosen}/${id}`);
            }}
          />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
        </>
      )}
    </section>
  );
}
