import { useParams } from "react-router-dom";
import { useTmdb } from "../../hooks/useTMDBdata";

type ImageProps = {
  profiles: {
    file_path: string;
  }[];
};

export default function ImagesView() {
  const params = useParams();
  const id = params.id;
  const tmdbData = useTmdb<ImageProps>(
    `https://api.themoviedb.org/3/person/${id}/images
`,
    {},
    []
  ).data?.profiles;
  if (tmdbData && tmdbData.length != 0) {
    return (
      <>
        {tmdbData.map((profile) => {
          return (
            <div key={profile.file_path}>
              <img src={`https://image.tmdb.org/t/p/w200${profile.file_path}`}></img>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h2> No Images Found</h2>;
  }
}
