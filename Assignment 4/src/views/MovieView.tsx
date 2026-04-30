import { FaCalendarAlt } from "react-icons/fa";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import LinkGroup from "../components/LinkGroup";
import { Modal } from "../components/Modal";
import { useTmdb } from "../hooks/useTMDBdata";



type movieData = {
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;

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
          <div className="p-5 space-y-5">
            <div
              className="h-[420px] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${tmdbData.backdrop_path})`,
              }}
            />
            <div className="flex gap-8">
              <img className="w-[220px] h-[330px] object-cover rounded-xl" src={`https://image.tmdb.org/t/p/w300/${tmdbData.poster_path}`} />
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold">{tmdbData.title || tmdbData.name}</h1>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt />
                  {tmdbData.release_date || tmdbData.first_air_date}
                </p>
                <p className="text-yellow-400 font-bold flex items-center gap-2">
                  Rating: {tmdbData.vote_average.toFixed(1)}/10
                </p>              
                <p className="text-gray-300">{tmdbData.overview}</p>
                <LinkGroup
                  links={[
                    ...(mediaType === "tv" ? [{ label: "Seasons", to: "seasons", replace: true }] : []),
                    { label: "Credits", to: "credits", replace: true },
                    { label: "Trailers", to: "trailers", replace: true },
                    { label: "Reviews", to: "reviews", replace: true },
                  ]}
                />
              </div>
            </div>

            <Outlet />
          </div>

        </>
      )}
    </Modal>
  );
}
