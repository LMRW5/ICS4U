import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useTmdb } from "../hooks/useTMDBdata"
import { Navlink } from "../components/Navlink";

type movieData = {
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
}

export default function MovieView(){
    const params = useParams()
    const navigate = useNavigate()
    const mediaID = params.id
    const tmdbData = useTmdb<movieData>(`https://api.themoviedb.org/3/movie/${mediaID}`, {}, []).data
    return <>
    {tmdbData&& <>
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${tmdbData.backdrop_path}`}></img>
    </div>
    <h2>{tmdbData.title}</h2>
    <div>
        <img src={`https://image.tmdb.org/t/p/w300/${tmdbData.poster_path}`}/>
        <p>{tmdbData.release_date}</p>
        <p>{tmdbData.overview}</p>
    </div>
    <Navlink to="credits">Credits</Navlink>
    <Navlink to="trailers">Trailers</Navlink>
    <Navlink to="reviews">Reviews</Navlink>

    <button onClick={()=> {navigate(-1)}}>Back</button>
    <Outlet />
    </>
    }
    </>
}