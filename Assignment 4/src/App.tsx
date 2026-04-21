import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/Mainlayout";
import ErrorView from "./views/Errorview";
import HomeView from "./views/Homeview";
import MoviesView from "./views/Moviesview";
import TelevisionView from "./views/TelevisionView";
import TrendingView from "./views/Trendingview";
import Genreview from "./views/Genreview";
import MovieView from "./views/MovieView";
import Creditsview from "./views/subfiles/Creditsview";
import Trailersview from "./views/subfiles/Trailersview";
import Reviewsview from "./views/subfiles/Reviewsview";
import SeasonsView from "./views/subfiles/Seasonsview";
import EpisodeView from "./views/subfiles/EpisodeView";
import Searchview from "./views/Searchview";
import Personview from "./views/subfiles/Personview";
import CareerView from "./views/subfiles/CareerView";
import ImagesView from "./views/subfiles/ImagesView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<MainLayout />}>
          <Route path="/search" element={<Searchview/>} />
          <Route path="/movies">
            <Route index element={<Navigate to="category/now_playing" replace />} />
            <Route path="category/:type" element={<MoviesView />} />
            <Route path=":id" element = {<MovieView/>}>
              <Route index element={<Navigate to="credits" replace />} />
                <Route path="credits" element = {<Creditsview/>}/>
                <Route path="trailers" element={<Trailersview />}/>
                <Route path="reviews" element={<Reviewsview />}/>
            </Route>

          </Route>
          <Route path="/tv">
            <Route index element={<Navigate to="category/airing_today" replace />} />
            <Route path="category/:type" element={<TelevisionView />} />
              <Route path=":id" element = {<MovieView/>}>
              <Route index element={<Navigate to="seasons" replace />} />
                <Route path="credits" element = {<Creditsview/>}/>
                <Route path="trailers" element={<Trailersview />}/>
                <Route path="reviews" element={<Reviewsview />}/>
                <Route path="seasons" element={<SeasonsView />}/>
                <Route path="seasons/:seasonNumber" element={<EpisodeView />}/>
            </Route>
          </Route>
          <Route path="/trending">
            <Route index element={<Navigate to="movie" replace />} />
            <Route path=":type" element={<TrendingView />} />
          </Route>
          <Route path="/genre">
            <Route index element={<Navigate to="movie/action" replace />} />
            <Route path=":type/:mediaGenre" element={<Genreview />} />
          </Route>
          <Route path="/person/:id" element={<Personview />}>
          <Route index element={<Navigate to="career" replace />} />
          <Route path="career" element={<CareerView />} />
          <Route path="images" element={<ImagesView />}/>
          </Route>
        </Route>

        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
}
