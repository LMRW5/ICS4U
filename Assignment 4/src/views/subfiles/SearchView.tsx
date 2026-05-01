import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ImageGrid, Pagination } from "../../components";
import { useDebounce } from "../../hooks/useDebounce";
import { useTmdb } from "../../hooks/useTMDBdata";
import type { SearchProps } from "../types";

export function Searchview() {
  const [page, setPage] = useState(1);
  const [params, _setSearchParams] = useSearchParams()
  const query = params.get("q")
  const type = params.get("type")
  const chosen = type === "movie" ? "movies" : type
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const tmdbData = useTmdb<SearchProps>(`https://api.themoviedb.org/3/search/${type}`, { query: debouncedQuery, page: page }, [debouncedQuery, type, page]).data;
  if (!tmdbData) {
    return <h1>no results found</h1>
  }
  const gridData = tmdbData.results.map((result: any) => ({
    id: result.id,
    primaryText: type === "movie" ? result.title : result.name,
    imagePath: result.poster_path || result.profile_path,
  }))

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-3">
      <h1>Search for: {query}</h1>
      <ImageGrid data={gridData} whenClicked={(id) => navigate(`/${chosen}/${id}`)} />

      <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData.total_pages)} />
    </section>
  );
}
