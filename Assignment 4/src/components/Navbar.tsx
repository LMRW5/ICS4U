import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Navlink } from "./Navlink";
import { QueryButton } from "./Querybutton";

export default function Navbar() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "movie");
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <>
      <nav className="relative">
        <Navlink to="/movies">Movies</Navlink>
        <Navlink to="/tv">TV</Navlink>
        <Navlink to="/trending">Trending</Navlink>
        <Navlink to="/genre">Genre</Navlink>
        <input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            navigate(`/search?q=${e.target.value}&type=${type}`);
          }}
          className="ml-4 px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
        />
        <QueryButton
          whenClicked={() => {
            setType("movie");
            if (location.pathname === "/search") navigate(`/search?q=${query}&type=movie`);
          }}
          matchParams={{ type: "movie" }}
          active={type === "movie"}
        >
          Movie
        </QueryButton>
        <QueryButton whenClicked={() => {
            setType("tv");
            if (location.pathname === "/search") navigate(`/search?q=${query}&type=tv`);
          }} matchParams={{ type: "tv" }}
          active={type === "tv"}>
          TV
        </QueryButton>
        <QueryButton whenClicked={() => {
            setType("person");
            if (location.pathname === "/search") navigate(`/search?q=${query}&type=person`);
          }} matchParams={{ type: "person" }}
          active={type === "person"}>
          Person
        </QueryButton>
      </nav>
    </>
  );
}
