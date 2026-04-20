import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
import Pagination from "../components/Pagination";
import { useDebounce } from "../hooks/useDebounce";
import { useTmdb } from "../hooks/useTMDBdata";

type SearchProps = {
  results: [];
  total_pages: number;
}
type SearchViewParams = {
  query: string;
  type: string;
}

export default function Searchview({query, type}: SearchViewParams) {
  const [page, setPage] = useState(1);


  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const tmdbData = useTmdb<SearchProps>(`https://api.themoviedb.org/3/search/${type}`, { query: debouncedQuery, page:page }, [debouncedQuery, type, page]).data;

  useEffect(() => {
    navigate(`/search?q=${query}&type=${type}`);
  }, [query, type]);

  if (!tmdbData) {
    return <h1>No Results Found</h1>;
  }

  return (
    <>
      
      {type == "movie" && (
        <>
          <Imagegrid data={tmdbData.results} whenClicked={(id) => navigate(`/movies/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
        </>
      )}
      {type == "tv" && (
        <>
          <Imagegrid data={tmdbData?.results} whenClicked={(id) => navigate(`/tv/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
        </>
      )}
      {type == "person" && (
        <>
          <Imagegrid data={tmdbData?.results} whenClicked={(id) => navigate(`/person/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
        </>
      )}
    </>
  );
}
