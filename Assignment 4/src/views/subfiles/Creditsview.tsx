import { useLocation, useParams } from "react-router-dom"
import { useTmdb } from "../../hooks/useTMDBdata"

type CreditsProps = {
    cast: {
        id: number;
        name: string;
        profile_path: string;
        character: string;
    }[]
}

export default function Creditsview(){
    const params = useParams()
    const id = params.id
    const location = useLocation();
    const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
    const tmdbData = useTmdb<CreditsProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/credits`, {}, []).data?.cast
    if (tmdbData && tmdbData.length != 0) {
        return <>
    {tmdbData?.map((person)=>{
        return <div key={person.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}></img>
            <p>{person.name}</p>
            <p>{person.character}</p>
        </div>
    })}
    </>
      }else{
        return <h2>No Credits Found</h2>
      }
    
}