import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Imagegrid } from "../components/ImageGrid";
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
  const navigate = useNavigate()

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
      <Navlink to="/tv/category/airing_today">
        Airring Today
      </Navlink>

      <Navlink to="/tv/category/on_the_air">
        On The Air
      </Navlink>

      <Navlink to="/tv/category/top_rated" >
        Top Rated
      </Navlink>

      <Navlink to="/tv/category/popular" >
        Popular
      </Navlink>

      {TVData && (
        <>
          <Imagegrid data={TVData?.results} whenClicked={(id)=>navigate(`/tv/${id}`)} />
          <Pagination setPage={setPage} page={page} totalPages={Math.min(500, TVData.total_pages)} />
        </>
      )}
    </div>
  );
}
