import { useParams } from "react-router-dom"
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
    const tmdbData = useTmdb<CreditsProps>(`https://api.themoviedb.org/3/movie/${id}/credits`, {}, []).data?.cast
    return <>
    {tmdbData?.map((person)=>{
        return <div key={person.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}></img>
            <p>{person.name}</p>
            <p>{person.character}</p>
        </div>
    })}
    </>
}