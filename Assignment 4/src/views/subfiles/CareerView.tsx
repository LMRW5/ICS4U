import { useNavigate, useParams } from "react-router-dom";
import { useTmdb } from "../../hooks/useTMDBdata";
import { ImageGrid } from "../../components/ImageGrid";

type CareerProps = {
  cast: {
    poster_path: string;
    title: string;
    character: string;
    id: number;
  }[];
};

export default function CareerView() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()
  const tmdbData = useTmdb<CareerProps>(
    `https://api.themoviedb.org/3/person/${id}/movie_credits
`,
    {},
    []
  ).data?.cast;
  if (tmdbData && tmdbData.length != 0) {
    return (
      <>
      <ImageGrid data={tmdbData}/>
        {tmdbData.map((movie) => {
          return (
            <div key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
              <h2>{movie.title}</h2>
              <p>{movie.character}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h2>No Movies Found</h2>;
  }
}
