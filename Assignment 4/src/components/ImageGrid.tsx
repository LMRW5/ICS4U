type ImagegridProps = {
  data: {
    id?: number | string;
    primaryText?: string;
    imagePath?: string;
    secondaryText?: string;
    episode_number?: number;
  }[];
  whenClicked?: (id: number | string) => void;
};

export function ImageGrid({ data, whenClicked }: ImagegridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-5">
      {data &&
        data.map((media) => (
          <div
            className="block bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            key={media.id}
            onClick={() => media.id !== undefined && whenClicked?.(media.id)}
          >
            <img
              className="w-full h-[280px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${media.imagePath}`}
              alt={media.primaryText}
            />
            <div className="p-3 text-center">
              {media.primaryText &&
            <p className="text-sm font-semibold truncate">{media.primaryText}</p>
            {media.secondaryText && (<p className="text-gray-400 font-semibold text-sm truncate">{media.secondaryText}</p>)}}
          </div>
          </div>
        ))}
    </div>
  );
}
