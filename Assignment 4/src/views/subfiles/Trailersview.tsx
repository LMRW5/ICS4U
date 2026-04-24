import { useLocation, useParams } from "react-router-dom";
import { useTmdb } from "../../hooks/useTMDBdata";

type TrailerProps = {
  results: {
    site: string;
    official: boolean;
    key: string;
    type: string;
    name: string;
    id: string;
  }[];
};

export default function Trailersview() {
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
  const tmdbData = useTmdb<TrailerProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/videos`, {}, []).data?.results;
  const trailerVideos =
    tmdbData?.filter((v) => {
      return v.site == "YouTube" && v.official == true && v.type == "Trailer";
    }) ||
    tmdbData?.filter((v) => {
      return v.site == "YouTube" && v.type == "Trailer";
    });
  if (trailerVideos && trailerVideos.length != 0) {
    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Trailers</h2>

        {trailerVideos.map((video) => {
          return (
            <div key={video.id} className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </section>
    );
  } else {
    return <section className="px-2 space-y-4">
    <h2 className="text-2xl font-bold">Trailers</h2>
  <h2 className="text-gray-400 text-center">No Trailers Found</h2>
  </section>
  }
}
