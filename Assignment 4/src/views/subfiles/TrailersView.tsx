import { useLocation, useParams } from "react-router-dom";
import { useTmdb } from "@/hooks/useTMDBdata";
import type { TrailerProps } from "@/views/types";

export function Trailersview() {
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
        <div className="grid gap-6 grid-cols-2">
          {trailerVideos.map((video) => {
            return (
              <div key={video.id} className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allowFullScreen
                ></iframe>
                <p className="mt-2 text-sm text-gray-300">{video.name}</p>
              </div>

            );
          })}
        </div>
      </section>
    );
  } else {
    return <section className="px-2 space-y-4">
      <h2 className="text-2xl font-bold">Trailers</h2>
      <h2 className="text-gray-400 text-center">No Trailers Found</h2>
    </section>
  }
}
