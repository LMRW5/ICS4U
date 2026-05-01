import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Pagination } from "@/components";
import { useTmdb } from "@/hooks/useTMDBdata";
import type { ReviewsProps } from "@/views/types";


export function Reviewsview() {
  const [page, setPage] = useState(1);
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie";
  const tmdbData = useTmdb<ReviewsProps>(`https://api.themoviedb.org/3/${mediaType}/${id}/reviews`, {}, []).data;

  if (tmdbData && tmdbData.total_pages != 0) {
    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Reviews</h2>

        {tmdbData?.results.map((review) => {
          return (
            <div key={review.id} className="bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-sm text-gray-400 mb-2">By: {review.author}</p>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">{review.content}</p>
            </div>
          );
        })}
        <Pagination setPage={setPage} page={page} totalPages={Math.min(500, tmdbData!.total_pages)} />
      </section>
    );
  } else {
    return (
      <section className="px-2 space-y-4">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <h2 className="text-gray-400 text-center">No Reviews Found</h2>
      </section>
    );
  }
}
