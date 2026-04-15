import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Moviegenre from "./Moviegenre"
import { Navlink } from "../components/Navlink"

type Movie = {
  id: number
  title: string
  poster_path: string
}
type MovieResponse = {
  results: Movie[]
  total_pages: number
}


export default function Moviesview() {
    const [activeChoice, setActiveChoice] = useState<string>("now_playing")
    const [activeName, setActiveName] = useState<string>("Now Playing")


    return (<div>
      <Navlink to=""></Navlink>
      <Navlink />
      <Navlink />
      <Navlink />
      <Moviegenre activeChoice={activeChoice} activeName={activeName}/>
      </div>
    )
  }
    