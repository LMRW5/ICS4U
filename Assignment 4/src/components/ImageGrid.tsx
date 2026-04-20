type ImagegridProps = {
    data: {
        id: number;
        title?: string;
        name?: string;
        poster_path?: string;
        profile_path?: string;
    }[];
    whenClicked?: (id: number) => void;
}

export function Imagegrid({data, whenClicked}: ImagegridProps){
    return <div>
    {data &&
            data.map((media) => (
              <div
                key={media.id}
                onClick={() => whenClicked?.(media.id)}
                style={{ cursor: whenClicked ? "pointer" : "default" }}
              >
                <h2>{media.title || media.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w200${media.poster_path || media.profile_path}`}
                  alt={media.title || media.name}
                />
              </div>
            ))}
        </div>
}