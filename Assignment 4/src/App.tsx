import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/Mainlayout";
import ErrorView from "./views/Errorview";
import HomeView from "./views/Homeview";
import MoviesView from "./views/Moviesview";
import TelevisionView from "./views/Televisionview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<MainLayout />}>
          <Route path="/movies">
            <Route index element={<Navigate to="category/now_playing" replace />} />
            <Route path="category/:type" element={<MoviesView />} />
          </Route>
          <Route path="/tv">
            <Route index element={<Navigate to="category/airing_today" replace />} />
            <Route path="category/:type" element={<TelevisionView />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
}
