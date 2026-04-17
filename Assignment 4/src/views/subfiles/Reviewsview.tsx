import { useLocation, useParams } from "react-router-dom"
import { useTmdb } from "../../hooks/useTMDBdata"
import Pagination from "../../components/Pagination";
import { useState } from "react";

type ReviewsProps = {
    results: {
        author: string;
        id: number;
        content: string;
    }[]
    total_pages:number
}

export default function Reviewsview(){
    const [page,setPage] = useState(1)
    const params = useParams()
    const id = params.id
    const location = useLocation();
    const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
    const tmdbData = useTmdb<ReviewsProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/reviews`, {}, []).data
    if (tmdbData && tmdbData.total_pages != 0){
    return <>
    {tmdbData?.results.map((review)=>{
        return <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
        </div>
    })}
        <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData!.total_pages)} />
    </>
    } else{
        return  <h2>No Reviews Found</h2>
    }
}