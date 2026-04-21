import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
import Pagination from "../components/Pagination";
import { useDebounce } from "../hooks/useDebounce";
import { useTmdb } from "../hooks/useTMDBdata";

type SearchProps = {
  results: [];
  total_pages: number;
}

export default function Searchview() {
  const [page, setPage] = useState(1);
  const [params, _setSearchParams] = useSearchParams()
  const query = params.get("q")
  const type = params.get("type")
  const chosen = type === "movie"? "movies" : type
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const tmdbData = useTmdb<SearchProps>(`https://api.themoviedb.org/3/search/${type}`, { query: debouncedQuery, page:page }, [debouncedQuery, type, page]).data;
  if (!tmdbData){
    return <h1>no results found</h1>
  }

  return (
    <>
      <Imagegrid data={tmdbData.results} whenClicked={(id) => navigate(`/${chosen}/${id}`)}/>
      
      <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
        </>
  );
}
