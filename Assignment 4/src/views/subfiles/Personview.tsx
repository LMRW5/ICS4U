import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import LinkGroup from "../../components/LinkGroup";
import { useTmdb } from "../../hooks/useTMDBdata";

type personProps = {
  birthday: string;
  biography: string;
  id: number;
  name: string;
  profile_path: string;
};

export default function Personview() {
  const params = useParams();
  const navigate = useNavigate();
  const personID = params.id;
  const tmdbData = useTmdb<personProps>(`https://api.themoviedb.org/3/person/${personID}`, {}, []).data;
  return (
    <>
      <h2>{tmdbData?.name}</h2>
      <p>{tmdbData?.birthday}</p>
      <p>{tmdbData?.biography}</p>
      <img src={`https://image.tmdb.org/t/p/w200${tmdbData?.profile_path}`}></img>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <LinkGroup
        links={[
          { label: "Career", to: `/person/${personID}/career`, replace: true },
          { label: "Images", to: `/person/${personID}/images`, replace: true },
        ]}
      />
      <Outlet />
    </>
  );
}
