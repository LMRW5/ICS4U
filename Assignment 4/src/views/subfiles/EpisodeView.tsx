import { useNavigate, useParams } from "react-router-dom"
import { useTmdb } from "@/hooks/useTMDBdata";
import { ImageGrid, Button } from "@/components";
import { FaCalendarAlt } from "react-icons/fa";
import type { EpisodeProps } from "@/views/types";


export function EpisodeView() {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id
  const seasonNumber = params.seasonNumber
  const tmdbData = useTmdb<EpisodeProps>(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`, {}, []).data;
  const gridData = tmdbData?.episodes.map((episode) => ({
    id: episode.id,
    primaryText: `Episode ${episode.episode_number}: ${episode.name}`,
    imagePath: episode.still_path,
    air_date: episode.air_date,
  }));

  if (!gridData || !tmdbData) {
    return <p>Loading...</p>;
  }

  return <section className="px-1 space-y-4">
    <Button onClick={() => navigate(-1)}>← Back</Button>
    {seasonNumber && Number(seasonNumber) > 0 ? <h1 className="text-2xl font-bold">Season {seasonNumber}</h1> : <h1 className="text-2xl font-bold">Specials</h1>}
    <p className="text-gray-400 flex items-center gap-2">
      <FaCalendarAlt />{tmdbData.air_date}</p>
    <p className="text-gray-300 leading-relaxed">{tmdbData.overview}</p>
    <h2 className="text-xl font-bold">Episodes:</h2>
    <ImageGrid data={gridData} />

  </section>
}