import { useParams } from "react-router-dom";
import { ImageGrid } from "../../components/ImageGrid";
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
  ).data;
  const gridData = tmdbData?.profiles.map((profile) => ({
    id: profile.file_path,
    imagePath: profile.file_path,
  }));
  if (gridData && gridData.length != 0) {
    return (
      <section className="max-w-[1200px] mx-auto p-5 space-y-3">
        <ImageGrid data={gridData} />
      </section>
    );
  } else {
    return <h2> No Images Found</h2>;
  }
}
