import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import LinkGroup from "../../components/LinkGroup";
import { useTmdb } from "../../hooks/useTMDBdata";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";


type personProps = {
  birthday: string;
  biography: string;
  id: number;
  name: string;
  profile_path: string;
  place_of_birth: string;
};

export default function Personview() {
  const params = useParams();
  const navigate = useNavigate();
  const personID = params.id;
  const tmdbData = useTmdb<personProps>(`https://api.themoviedb.org/3/person/${personID}`, {}, []).data;
  return (
    <section className="max-w-4xl mx-auto p-5">
      <div className="flex gap-8 py-10">
        <img
          className="w-[220px] h-[330px] object-cover rounded-xl shadow-lg flex-shrink-0"
          src={`https://image.tmdb.org/t/p/w200${tmdbData?.profile_path}`}
          alt={tmdbData?.name ?? "Person image"}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate(-1)}>← Back</Button>
          <h1 className="text-4xl font-bold">{tmdbData?.name}</h1>
          <p className="text-gray-400 flex items-center gap-2 pl-2"><FaLocationArrow /> {tmdbData?.place_of_birth}</p>
          <p className="text-gray-400 flex items-center gap-2 pl-2"><FaBirthdayCake /> {tmdbData?.birthday}</p>
          <p className="pl-2 text-gray-300">{tmdbData?.biography || "No biography available."}</p>
          <LinkGroup
            links={[
              { label: "Career", to: `/person/${personID}/career`, replace: true },
              { label: "Images", to: `/person/${personID}/images`, replace: true },
            ]}
          />
        </div>
      </div>
      <Outlet />
    </section>
  );
}
