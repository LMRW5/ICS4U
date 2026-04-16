import { useState } from "react"
import Moviegenre from "./Moviegenre"
import { Navlink } from "../components/Navlink"

type Movie = {
  id: number
  title: string
  poster_path: string
}



export default function Moviesview() {
    const [activeName, setActiveName] = useState<string>("Now Playing")


    return (<div>
      <Navlink to="/movies/category/now_playing" whenClicked={()=>{
        setActiveName("Now Playing")
      }} >Now Playing</Navlink>
      <Navlink to="/movies/category/upcoming" whenClicked={()=>{
        setActiveName("Upcoming")
      }}>Upcoming</Navlink>
      <Navlink to="/movies/category/top_rated" whenClicked={()=>{
        setActiveName("Top Rated")
      }}>Top Rated</Navlink>
      <Navlink to="/movies/category/popular" whenClicked={()=>{
        setActiveName("Popular")
      }}>Popular</Navlink>
      <Moviegenre activeName={activeName}/>
      </div>
    )
  }
    