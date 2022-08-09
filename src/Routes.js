import { Routes, Route } from "react-router-dom";

import MostViewed from "./components/MostViewed";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/most-viewed" element={<MostViewed />} />
    </Routes>
  );
}
