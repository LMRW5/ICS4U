import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Navlink } from "../components/Navlink";
import { useTmdb } from "../hooks/useTMDBdata";
import { Querybutton } from "../components/Querybutton";

type Media = {
    id: number;
    title?: string;
    name?: string;
    poster_path: string;
};

type MediaResponse = {
    results: Media[];
    total_pages: number;
};


export default function TrendingView() {
    const [activeName, setActiveName] = useState<string>("Now Playing");
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    const activeChoice = params.type;
    const interval = searchParams.get("interval") ?? "day";

    useEffect(() => {
        if(!searchParams.get("interval")){
            setSearchParams({interval:"day"})
        }
    }, [activeChoice]);

    const mediaData = useTmdb<MediaResponse>(
        `https://api.themoviedb.org/3/trending/${activeChoice}/${interval}`,
        {
            language: "en-US",
        },
        [activeChoice, interval]
    ).data;

    return (
        <div>
            <Navlink
                to={`/trending/movie?interval=${interval}`}
                whenClicked={() => setActiveName("Trending Movies")}
            >
                Movies
            </Navlink>

            <Navlink
                to={`/trending/tv?interval=${interval}`}
                whenClicked={() => setActiveName("Trending TV")}
            >
                TV
            </Navlink>

            <Querybutton
                to={`/trending/${activeChoice}?interval=day`}
                matchParams={{interval: "day"}}
            >
                Day
            </Querybutton>

            <Querybutton
                to={`/trending/${activeChoice}?interval=week`}
                matchParams={{interval:"week"}}
            >
                Week
            </Querybutton>

            <h1>{activeName}</h1>

            {mediaData &&
                mediaData.results.map((media) => (
                    <div key={media.id}>
                        <h2>{media.title || media.name}</h2>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
                            alt={media.title}
                        />
                    </div>
                ))}

        </div>
    );
}