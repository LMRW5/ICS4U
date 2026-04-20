import { Outlet, useParams } from "react-router-dom"
import { useTmdb } from "../../hooks/useTMDBdata";
import { Navlink } from "../../components/Navlink";

type personProps = {
    birthday: string;
    biography: string;
    id: number;
    name: string;
    profile_path: string;
}

export default function Personview(){
    const params = useParams()
    const personID = params.id
    const tmdbData = useTmdb<personProps>(`https://api.themoviedb.org/3/person/${personID}`, {}, []).data
    return <>
    <h2>{tmdbData?.name}</h2>
    <p>{tmdbData?.birthday}</p>
    <p>{tmdbData?.biography}</p>
    <img src={`https://image.tmdb.org/t/p/w200${tmdbData?.profile_path}`}></img>
    <Navlink to={`/person/${personID}/career`}>Career</Navlink>
    <Navlink to={`/person/${personID}/images`}>Images</Navlink>
    <Outlet />
    </>
}