import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LinkGroup from "./LinkGroup";
import { QueryButton } from "./Querybutton";
import ButtonGroup from "./ButtonGroup";

export default function Navbar() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "movie");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav className="relative flex items-center p-4 bg-gray-800">
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
            <div className="flex gap-3">
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
              <QueryButton
                whenClicked={() => {
                  setType("tv");
                  if (location.pathname === "/search") navigate(`/search?q=${query}&type=tv`);
                }}
                matchParams={{ type: "tv" }}
                active={type === "tv"}
              >
                TV
              </QueryButton>
              <QueryButton
                whenClicked={() => {
                  setType("person");
                  if (location.pathname === "/search") navigate(`/search?q=${query}&type=person`);
                }}
                matchParams={{ type: "person" }}
                active={type === "person"}
              >
                Person
              </QueryButton>
            </div>
            <ButtonGroup buttons={<ButtonGroup
  buttons={[
    {
      label: "Movie",
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
/>}/>
          </div>
        </div>
      </nav>
    </>
  );
}
