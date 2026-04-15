import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homeview from "./views/Homeview"
import Errorview from "./views/Errorview"
import Nowplayingview from "./views/Nowplayingview"
import { MainLayout } from "./layouts/Mainlayout"
import Moviesview from "./views/Moviesview"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview/>}/>
        <Route element={<MainLayout/>}>
          <Route path="/now-playing" element={<Nowplayingview/>} />
          <Route path="/movies/category/:type" element={<Moviesview/>} />

        </Route>
        <Route path="*" element={<Errorview/>} />
      </Routes>
    </BrowserRouter>
  )
}
