import { ImageGrid, LinkGroup, Pagination } from "@/components";
import type { TVResponse } from "@/core/types";
import { useTmdb } from "@/hooks/useTMDBdata";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function TelevisionView() {
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

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
  const gridData = TVData?.results.map((tv) => ({
    id: tv.id,
    primaryText: tv.name,
    imagePath: tv.poster_path,
  }));

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-3">
      <LinkGroup
        links={[
          { label: "Airing Today", to: "/tv/category/airing_today" },
          { label: "On The Air", to: "/tv/category/on_the_air" },
          { label: "Top Rated", to: "/tv/category/top_rated" },
          { label: "Popular", to: "/tv/category/popular" },
        ]}
      />

      {gridData && TVData && (
        <>
          <ImageGrid data={gridData} whenClicked={(id) => navigate(`/tv/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, TVData.total_pages)} />
        </>
      )}
    </section>
  );
}
