import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import LinkGroup from "../components/LinkGroup";
import { Modal } from "../components/Modal";
import { useTmdb } from "../hooks/useTMDBdata";

type movieData = {
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};

export default function MovieView() {
  const params = useParams();
  const navigate = useNavigate();
  const mediaID = params.id;
  const location = useLocation();
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";

  const tmdbData = useTmdb<movieData>(`https://api.themoviedb.org/3/${mediaType}/${mediaID}`, {}, []).data;
  return (
    <Modal
      onClose={() => {
        navigate(-1);
      }}
    >
      {tmdbData && (
        <>
          <div>
            <img src={`https://image.tmdb.org/t/p/original/${tmdbData.backdrop_path}`}></img>
          </div>
          <h2>{tmdbData.title}</h2>
          <div>
            <img src={`https://image.tmdb.org/t/p/w300/${tmdbData.poster_path}`} />
            <p>{tmdbData.release_date}</p>
            <p>{tmdbData.overview}</p>
          </div>

          <LinkGroup
            links={[
              ...(mediaType === "tv" ? [{ label: "Seasons", to: "seasons" }] : []),
              { label: "Credits", to: "credits", replace: true },
              { label: "Trailers", to: "trailers", replace: true },
              { label: "Reviews", to: "reviews", replace: true },
            ]}
          />

          <Outlet />
        </>
      )}
    </Modal>
  );
}
