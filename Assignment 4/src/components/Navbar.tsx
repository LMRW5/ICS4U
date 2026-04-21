import { useState, useEffect } from "react";
import { Navlink } from "./Navlink";
import { Querybutton } from "./Querybutton";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("movie");
    const navigate = useNavigate()

    useEffect(() => {
        if (query) {
            navigate(`/search?q=${query}&type=${type}`);
        }
    }, [query, type]);

    return (<>
        <nav className="relative">
            <Navlink to="/">Home</Navlink>
            <Navlink to="/movies">Movies</Navlink>
            <Navlink to="/tv">TV</Navlink>
            <Navlink to="/trending">Trending</Navlink>
            <Navlink to="/genre">Genre</Navlink>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="ml-4 px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
            />
            <Querybutton to="" whenClicked={() => setType("movie")} matchParams={{ type: "movie" }}>
                Movie
            </Querybutton>
            <Querybutton to="" whenClicked={() => setType("tv")} matchParams={{ type: "tv" }}>
                TV
            </Querybutton>
            <Querybutton to="" whenClicked={() => setType("person")} matchParams={{ type: "person" }}>
                Person
            </Querybutton>
        </nav>
    </>)
}