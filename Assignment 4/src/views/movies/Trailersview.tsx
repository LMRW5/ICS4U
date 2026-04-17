import { useParams } from "react-router-dom";
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
  const tmdbData = useTmdb<TrailerProps>(`https://api.themoviedb.org/3/movie/${id}/videos`, {}, []).data?.results;
  const trailerVideos =
    tmdbData?.filter((v) => {
      return v.site == "YouTube" && v.official == true && v.type == "Trailer";
    }) ||
    tmdbData?.filter((v) => {
      return v.site == "YouTube" && v.type == "Trailer";
    });
  return (
    <>
      {trailerVideos?.map((video) => {
        return (
          <div key={video.id}>
            <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name} allowFullScreen></iframe>
          </div>
        );
      })}
    </>
  );
}
