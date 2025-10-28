import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "../Layouts/UserLayout";
import Home from "./LandingPage/Home/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}