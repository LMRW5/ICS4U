type ImagegridProps = {
  data: {
    id?: number ;
    title?: string;
    name?: string;
    poster_path?: string;
    profile_path?: string;
    file_path?: string;
    still_path?: string;
    character?: string;
    air_date?: string;
    episode_number?: number;
  }[];
  whenClicked?: (id: number) => void;
};

export function ImageGrid({ data, whenClicked }: ImagegridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-5">
      {data &&
        data.map((media) => (
          <div
            className="block bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            key={media.id}
            onClick={() => whenClicked?.(media.id)}
            style={{ cursor: whenClicked ? "pointer" : "default" }}
          >
            <img
              className="w-full h-[280px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${media.poster_path || media.file_path || media.profile_path || media.still_path}`}
              alt={media.title || media.name}
            />
            <div className="p-3 text-center">
              {media.still_path ? (
                <p className="text-sm font-semibold truncate">
                  Ep {media.episode_number}: {media.name}
                </p>
              ) : (
                <p className="text-sm font-semibold truncate">{media.title || media.name}</p>
              )}
              {(media.character || media.air_date) && (<p className="text-gray-400 text-xs">{media.character || media.air_date}</p>)}
            </div>
          </div>
        ))}
    </div>
  );
}
