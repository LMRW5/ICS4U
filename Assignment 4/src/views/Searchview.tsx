import { useEffect, useState } from "react";
import { Querybutton } from "../components/Querybutton";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Searchview() {
 const [searchParams] = useSearchParams();
  
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "movie");
  
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();

  useEffect(() => {
      navigate(`/search?q=${query}&type=${type}`);

  }, [query, type]);
  

  return (
    <>
      <h1>{query}</h1>
      <input
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        placeholder="Search..."
      />
      <Querybutton to="" whenClicked={()=>setType("movie")} matchParams={{ type: "movie" }}>
        Movie
      </Querybutton>

      <Querybutton  to="" whenClicked={()=>setType("tv")} matchParams={{ type: "tv" }}>
        TV
      </Querybutton>
            <Querybutton  to =""whenClicked={()=>setType("person") }matchParams={{ type: "person" }}>
        Person
      </Querybutton>
    </>
  );
}
