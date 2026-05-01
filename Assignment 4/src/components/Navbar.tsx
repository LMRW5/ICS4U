import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ButtonGroup, LinkGroup } from "./index";


export function Navbar() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "movie");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav className="flex items-center p-4 bg-gray-800">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>

          <LinkGroup
            links={[
              { label: "Movies", to: "/movies" },
              { label: "TV", to: "/tv" },
              { label: "Trending", to: "/trending" },
              { label: "Genre", to: "/genre" },
            ]}
          />
        </div>
        <div className="ml-auto">
          <div className="flex w-full max-w-2xl gap-3 items-center">
            <div className="flex items-center">
              <FaSearch />

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
            </div>
            <ButtonGroup
              buttons={[
                {
                  label: "Movies",
                  matchParams: { type: "movie" },
                  active: type === "movie",
                  whenClicked: () => {
                    setType("movie");
                    if (location.pathname === "/search") {
                      navigate(`/search?q=${query}&type=movie`);
                    }
                  },
                },
                {
                  label: "TV",
                  matchParams: { type: "tv" },
                  active: type === "tv",
                  whenClicked: () => {
                    setType("tv");
                    if (location.pathname === "/search") {
                      navigate(`/search?q=${query}&type=tv`);
                    }
                  },
                },
                {
                  label: "Person",
                  matchParams: { type: "person" },
                  active: type === "person",
                  whenClicked: () => {
                    setType("person");
                    if (location.pathname === "/search") {
                      navigate(`/search?q=${query}&type=person`);
                    }
                  },
                },
              ]}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
