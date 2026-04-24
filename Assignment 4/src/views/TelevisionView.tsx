import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid } from "../components/ImageGrid";
import LinkGroup from "../components/LinkGroup";
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

      {TVData && (
        <>
          <ImageGrid data={TVData?.results} whenClicked={(id) => navigate(`/tv/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, TVData.total_pages)} />
        </>
      )}
    </section>
  );
}
